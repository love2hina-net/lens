/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { noop, chunk } from "lodash/fp";
import { createContainer, isInjectable } from "@ogre-tools/injectable";
import { getOverrideFsWithFakes } from "../test-utils/override-fs-with-fakes";
import terminalSpawningPoolInjectable from "./components/dock/terminal/terminal-spawning-pool.injectable";
import hostedClusterIdInjectable from "./cluster-frame-context/hosted-cluster-id.injectable";
import { runInAction } from "mobx";
import { animateFeature, requestAnimationFrameInjectable } from "@love2hina-net/k8slens.animate";
import startTopbarStateSyncInjectable from "./components/layout/top-bar/start-state-sync.injectable";
import watchHistoryStateInjectable from "./remote-helpers/watch-history-state.injectable";
import legacyOnChannelListenInjectable from "./ipc/legacy-channel-listen.injectable";
import type { GlobalOverride } from "@love2hina-net/k8slens.test-utils";
import { setLegacyGlobalDiForExtensionApi } from "@love2hina-net/k8slens.legacy-global-di";
import { registerMobX } from "@ogre-tools/injectable-extension-for-mobx";
import { registerInjectableReact } from "@ogre-tools/injectable-react";
import { registerFeature } from "@love2hina-net/k8slens.feature-core";
import { messagingFeature, testUtils as messagingTestUtils } from "@love2hina-net/k8slens.messaging";
import { routingFeature } from "@love2hina-net/k8slens.routing";
import { loggerFeature } from "@love2hina-net/k8slens.logger";
import { clusterSidebarFeature } from "@love2hina-net/k8slens.cluster-sidebar";
import { randomFeature } from "@love2hina-net/k8slens.random";
import { kubeApiSpecificsFeature } from "@love2hina-net/k8slens.kube-api-specifics";
import { notificationsFeature } from "@love2hina-net/k8slens.notifications";

export const getDiForUnitTesting = () => {
  const environment = "renderer";
  const di = createContainer(environment, {
    detectCycles: false,
  });

  registerMobX(di);
  registerInjectableReact(di);
  setLegacyGlobalDiForExtensionApi(di, environment);

  runInAction(() => {
    registerFeature(di,
      messagingFeature,
      messagingTestUtils.messagingFeatureForUnitTesting,
      routingFeature,
      loggerFeature,
      animateFeature,
      clusterSidebarFeature,
      randomFeature,
      kubeApiSpecificsFeature,
      notificationsFeature,
    );
  });

  di.preventSideEffects();

  runInAction(() => {
    const injectables = global.injectablePaths.renderer.paths
      .map(path => require(path))
      .flatMap(Object.values)
      .filter(isInjectable);

    for (const block of chunk(100)(injectables)) {
      di.register(...block);
    }
  });

  for (const globalOverridePath of global.injectablePaths.renderer.globalOverridePaths) {
    const globalOverride = require(globalOverridePath).default as GlobalOverride<unknown, unknown, unknown>;

    di.override(globalOverride.injectable, globalOverride.overridingInstantiate);
  }

  [
    startTopbarStateSyncInjectable,
  ].forEach((injectable) => {
    di.override(injectable, () => ({
      id: injectable.id,
      run: () => {},
    }));
  });

  di.override(terminalSpawningPoolInjectable, () => document.createElement("div"));
  di.override(hostedClusterIdInjectable, () => undefined);

  di.override(legacyOnChannelListenInjectable, () => () => noop);

  di.override(requestAnimationFrameInjectable, () => (callback) => callback());
  di.override(watchHistoryStateInjectable, () => () => () => {});

  getOverrideFsWithFakes()(di);

  return di;
};
