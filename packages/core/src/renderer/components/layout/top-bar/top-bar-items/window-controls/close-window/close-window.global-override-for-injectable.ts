/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import closeWindowInjectable from "./close-window.injectable";
import { getGlobalOverrideForFunction } from "@love2hina-net/k8slens.test-utils";

export default getGlobalOverrideForFunction(closeWindowInjectable);
