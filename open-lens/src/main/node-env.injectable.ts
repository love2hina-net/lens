import { getInjectable } from "@ogre-tools/injectable";
import { nodeEnvInjectionToken } from "@love2hina-net/k8slens.core/main";

export const nodeEnvInjectable = getInjectable({
  id: "node-env",
  instantiate: () => process.env.NODE_ENV || "development",
  injectionToken: nodeEnvInjectionToken,
});
