/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { PersistentVolume, StorageClass } from "@love2hina-net/k8slens.kube-object";
import type { PersistentVolumeApi } from "@love2hina-net/k8slens.kube-api";

export class PersistentVolumeStore extends KubeObjectStore<PersistentVolume, PersistentVolumeApi> {
  getByStorageClass(storageClass: StorageClass): PersistentVolume[] {
    const storageClassName = storageClass.getName();

    return this.items.filter(volume => volume.getStorageClassName() === storageClassName);
  }
}
