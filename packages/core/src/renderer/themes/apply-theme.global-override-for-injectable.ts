/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@love2hina-net/k8slens.test-utils";
import applyLensThemeInjectable from "./apply-lens-theme.injectable";

export default getGlobalOverride(applyLensThemeInjectable, () => () => {});
