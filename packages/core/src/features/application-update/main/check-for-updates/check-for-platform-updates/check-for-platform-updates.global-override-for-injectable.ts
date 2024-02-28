/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import checkForPlatformUpdatesInjectable from "./check-for-platform-updates.injectable";
import { getGlobalOverrideForFunction } from "@love2hina-net/k8slens.test-utils";

export default getGlobalOverrideForFunction(checkForPlatformUpdatesInjectable);
