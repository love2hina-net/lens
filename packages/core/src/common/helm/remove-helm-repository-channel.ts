/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { AsyncResult } from "@love2hina-net/k8slens.utilities";
import { getRequestChannel } from "@love2hina-net/k8slens.messaging";
import type { HelmRepo } from "./helm-repo";

export const removeHelmRepositoryChannel = getRequestChannel<
  HelmRepo,
  AsyncResult<void, string>
>("remove-helm-repository-channel");
