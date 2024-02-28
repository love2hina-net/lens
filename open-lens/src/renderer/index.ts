import "@love2hina-net/k8slens.core/styles";
import "@love2hina-net/k8slens.button/styles";
import "@love2hina-net/k8slens.error-boundary/styles";
import "@love2hina-net/k8slens.tooltip/styles";
import "@love2hina-net/k8slens.resizing-anchor/styles";
import "@love2hina-net/k8slens.icon/styles";
import "@love2hina-net/k8slens.animate/styles";
import "@love2hina-net/k8slens.notifications/styles";
import "@love2hina-net/k8slens.spinner/styles";

import { runInAction } from "mobx";
import {
  rendererExtensionApi as Renderer,
  commonExtensionApi as Common,
  registerLensCore,
  metricsFeature,
} from "@love2hina-net/k8slens.core/renderer";
import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { registerFeature } from "@love2hina-net/k8slens.feature-core";
import {
  applicationFeature,
  startApplicationInjectionToken
} from "@love2hina-net/k8slens.application";
import { createContainer } from "@ogre-tools/injectable";
import { registerMobX } from "@ogre-tools/injectable-extension-for-mobx";
import { registerInjectableReact } from "@ogre-tools/injectable-react";
import { messagingFeatureForRenderer } from "@love2hina-net/k8slens.messaging-for-renderer";
import { keyboardShortcutsFeature } from "@love2hina-net/k8slens.keyboard-shortcuts";
import { reactApplicationFeature } from "@love2hina-net/k8slens.react-application";
import { routingFeature } from "@love2hina-net/k8slens.routing";
import { loggerFeature } from "@love2hina-net/k8slens.logger";
import { animateFeature } from "@love2hina-net/k8slens.animate";
import { clusterSidebarFeature } from "@love2hina-net/k8slens.cluster-sidebar";
import { randomFeature } from "@love2hina-net/k8slens.random";
import { kubeApiSpecificsFeature } from "@love2hina-net/k8slens.kube-api-specifics";
import { notificationsFeature } from "@love2hina-net/k8slens.notifications";

const environment = "renderer";

const di = createContainer(environment, {
  detectCycles: false,
});

runInAction(() => {
  registerMobX(di);
  registerInjectableReact(di);
  registerLensCore(di, environment);

  registerFeature(
    di,
    loggerFeature,
  );

  registerFeature(
    di,
    applicationFeature,
    messagingFeatureForRenderer,
    keyboardShortcutsFeature,
    reactApplicationFeature,
    routingFeature,
    metricsFeature,
    animateFeature,
    clusterSidebarFeature,
    randomFeature,
    kubeApiSpecificsFeature,
    notificationsFeature,
  );

  autoRegister({
    di,
    targetModule: module,
    getRequireContexts: () => [
      require.context("./", true, CONTEXT_MATCHER_FOR_NON_FEATURES),
      require.context("../common", true, CONTEXT_MATCHER_FOR_NON_FEATURES),
    ],
  });
});

const startApplication = di.inject(startApplicationInjectionToken);

startApplication();

export {
  React,
  ReactDOM,
  ReactRouter,
  ReactRouterDom,
  Mobx,
  MobxReact,
} from "@love2hina-net/k8slens.core/renderer";

export const LensExtensions = {
  Renderer,
  Common,
};
