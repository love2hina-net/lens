/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { ConfigMap, ConfigMapData } from "@love2hina-net/k8slens.kube-object";
import type { ConfigMapApi } from "@love2hina-net/k8slens.kube-api";

export class ConfigMapStore extends KubeObjectStore<ConfigMap, ConfigMapApi, ConfigMapData> {
}
