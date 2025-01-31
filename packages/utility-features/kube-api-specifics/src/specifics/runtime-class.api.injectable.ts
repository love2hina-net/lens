/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import assert from "assert";
import { storesAndApisCanBeCreatedInjectionToken } from "./can-be-created-token";
import { RuntimeClassApi } from "@love2hina-net/k8slens.kube-api";
import { kubeApiInjectionToken } from "./token";
import { logErrorInjectionToken, logInfoInjectionToken, logWarningInjectionToken } from "@love2hina-net/k8slens.logger";
import { maybeKubeApiInjectable } from "./maybe-kube-api.injectable";

export const runtimeClassApiInjectable = getInjectable({
  id: "runtime-class-api",
  instantiate: (di) => {
    assert(
      di.inject(storesAndApisCanBeCreatedInjectionToken),
      "RuntimeClassApi is only available in certain environments",
    );

    return new RuntimeClassApi({
      logError: di.inject(logErrorInjectionToken),
      logInfo: di.inject(logInfoInjectionToken),
      logWarn: di.inject(logWarningInjectionToken),
      maybeKubeApi: di.inject(maybeKubeApiInjectable),
    });
  },

  injectionToken: kubeApiInjectionToken,
});
