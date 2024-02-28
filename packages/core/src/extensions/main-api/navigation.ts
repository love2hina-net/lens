/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getEnvironmentSpecificLegacyGlobalDiForExtensionApi } from "@love2hina-net/k8slens.legacy-global-di";
import navigateInjectable from "../../main/start-main-application/lens-window/navigate.injectable";

export function navigate(url: string) {
  const di = getEnvironmentSpecificLegacyGlobalDiForExtensionApi("main");
  const navigate = di.inject(navigateInjectable);

  return navigate(url);
}
