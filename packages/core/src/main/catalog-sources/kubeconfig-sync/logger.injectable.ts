/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { prefixedLoggerInjectable } from "@love2hina-net/k8slens.logger";

const kubeconfigSyncLoggerInjectable = getInjectable({
  id: "kubeconfig-sync-logger",
  instantiate: (di) => di.inject(prefixedLoggerInjectable, "KUBECONFIG-SYNC"),
});

export default kubeconfigSyncLoggerInjectable;
