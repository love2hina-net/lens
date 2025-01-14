/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { Endpoints, EndpointsData } from "@love2hina-net/k8slens.kube-object";
import type { EndpointsApi } from "@love2hina-net/k8slens.kube-api";
import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";

export class EndpointsStore extends KubeObjectStore<Endpoints, EndpointsApi, EndpointsData> {
}
