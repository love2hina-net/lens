/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@love2hina-net/k8slens.test-utils";
import { reloadPageChannel } from "../common/channel";
import reloadPageChannelListenerInjectable from "./register-listener.injectable";

export default getGlobalOverride(reloadPageChannelListenerInjectable, () => ({
  id: "reload-page-channel-listener",
  channel: reloadPageChannel,
  handler: () => {},
}));
