/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { KubeApi } from "@love2hina-net/k8slens.kube-api";
import type { KubeObjectStoreDependencies } from "../kube-object.store";
import { KubeObjectStore } from "../kube-object.store";
import type { KubeObject } from "@love2hina-net/k8slens.kube-object";

export class CustomResourceStore<K extends KubeObject> extends KubeObjectStore<K, KubeApi<K>> {
  constructor(deps: KubeObjectStoreDependencies, api: KubeApi<K>) {
    super(deps, api);
  }
}
