/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getGlobalOverride } from "@love2hina-net/k8slens.test-utils";
import createElectronWindowInjectable from "./create-electron-window.injectable";

export default getGlobalOverride(createElectronWindowInjectable, () => () => ({
  loadFile: async () => {},
  loadUrl: async () => {},
  show: () => {},
  close: () => {},
  send: () => {},
  reload: () => {},
}));
