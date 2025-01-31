/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { loggerInjectionToken } from "@love2hina-net/k8slens.logger";
import { getGlobalOverride } from "@love2hina-net/k8slens.test-utils";

export default getGlobalOverride(loggerInjectionToken, () => ({
  warn: () => {},
  debug: () => {},
  error: () => {},
  info: () => {},
  silly: () => {},
}));
