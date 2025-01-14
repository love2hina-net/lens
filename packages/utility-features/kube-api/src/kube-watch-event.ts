/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { KubeStatusData } from "@love2hina-net/k8slens.kube-object";

export type IKubeWatchEvent<T> =
  | {
      readonly type: "ADDED" | "MODIFIED" | "DELETED";
      readonly object: T;
    }
  | {
      readonly type: "ERROR";
      readonly object?: KubeStatusData;
    };
