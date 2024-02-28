import { getInjectable } from "@ogre-tools/injectable";
import type { RequestFromChannel } from "@love2hina-net/k8slens.messaging";
import { requestFromChannelInjectionToken } from "@love2hina-net/k8slens.messaging";
import invokeIpcInjectable from "./invoke-ipc.injectable";

const requestFromChannelInjectable = getInjectable({
  id: "request-from-channel",

  instantiate: (di) => {
    const invokeIpc = di.inject(invokeIpcInjectable);

    return ((channel, request) => invokeIpc(channel.id, request)) as RequestFromChannel;
  },

  injectionToken: requestFromChannelInjectionToken,
});

export default requestFromChannelInjectable;
