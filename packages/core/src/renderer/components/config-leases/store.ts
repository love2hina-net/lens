/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { LeaseApi } from "@love2hina-net/k8slens.kube-api";
import type { Lease } from "@love2hina-net/k8slens.kube-object";

export class LeaseStore extends KubeObjectStore<Lease, LeaseApi> {
}
