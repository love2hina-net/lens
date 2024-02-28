/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@love2hina-net/k8slens.test-utils";
import { getRandomIdInjectionToken } from "@love2hina-net/k8slens.random";

export default getGlobalOverride(getRandomIdInjectionToken, () => () => "some-irrelevant-random-id");
