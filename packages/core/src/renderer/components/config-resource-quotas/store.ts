/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { ResourceQuotaApi } from "@love2hina-net/k8slens.kube-api";
import type { ResourceQuota } from "@love2hina-net/k8slens.kube-object";

export class ResourceQuotaStore extends KubeObjectStore<ResourceQuota, ResourceQuotaApi> {
}
