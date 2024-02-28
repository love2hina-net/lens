/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { Ingress } from "@love2hina-net/k8slens.kube-object";
import type { IngressApi } from "@love2hina-net/k8slens.kube-api";
import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";

export class IngressStore extends KubeObjectStore<Ingress, IngressApi> {
}
