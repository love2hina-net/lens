/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { ClusterId } from "../../../../common/cluster-types";
import type { RequestChannel } from "@love2hina-net/k8slens.messaging";
import { getRequestChannel } from "@love2hina-net/k8slens.messaging";

export type DeleteClusterChannel = RequestChannel<ClusterId, void>;

export const deleteClusterChannel = getRequestChannel<ClusterId, void>(
  "delete-cluster",
);
