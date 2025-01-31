/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import assert from "assert";
import { kubeObjectStoreInjectionToken } from "../../../common/k8s-api/api-manager/kube-object-store-token";
import { configMapApiInjectable, storesAndApisCanBeCreatedInjectionToken } from "@love2hina-net/k8slens.kube-api-specifics";
import { loggerInjectionToken } from "@love2hina-net/k8slens.logger";
import clusterFrameContextForNamespacedResourcesInjectable from "../../cluster-frame-context/for-namespaced-resources.injectable";
import { ConfigMapStore } from "./store";

const configMapStoreInjectable = getInjectable({
  id: "config-map-store",
  instantiate: (di) => {
    assert(di.inject(storesAndApisCanBeCreatedInjectionToken), "configMapStore is only available in certain environments");

    const api = di.inject(configMapApiInjectable);

    return new ConfigMapStore({
      context: di.inject(clusterFrameContextForNamespacedResourcesInjectable),
      logger: di.inject(loggerInjectionToken),
    }, api);
  },
  injectionToken: kubeObjectStoreInjectionToken,
});

export default configMapStoreInjectable;
