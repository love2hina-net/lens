/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getRequestChannel } from "@love2hina-net/k8slens.messaging";

export const casChannel = getRequestChannel<void, string[]>("certificate-authorities");
