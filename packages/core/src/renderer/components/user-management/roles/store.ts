/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { Role, RoleData } from "@love2hina-net/k8slens.kube-object";
import type { RoleApi } from "@love2hina-net/k8slens.kube-api";
import { KubeObjectStore } from "../../../../common/k8s-api/kube-object.store";

export class RoleStore extends KubeObjectStore<Role, RoleApi, RoleData> {
  protected sortItems(items: Role[]) {
    return super.sortItems(items, [
      role => role.kind,
      role => role.getName(),
    ]);
  }
}
