import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { getFeature } from "@love2hina-net/k8slens.feature-core";
import { messagingFeature } from "@love2hina-net/k8slens.messaging";

export const messagingFeatureForMain = getFeature({
  id: "messaging-for-main",

  register: (di) => {
    autoRegister({
      di,
      targetModule: module,

      getRequireContexts: () => [require.context("./", true, /\.injectable\.(ts|tsx)$/)],
    });
  },

  dependencies: [messagingFeature],
});
