/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverrideForFunction } from "@love2hina-net/k8slens.test-utils";
import execFileInjectable from "./exec-file.injectable";

export default getGlobalOverrideForFunction(execFileInjectable);
