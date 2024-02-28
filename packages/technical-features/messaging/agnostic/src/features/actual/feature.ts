import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { applicationFeature } from "@love2hina-net/k8slens.application";
import { getFeature } from "@love2hina-net/k8slens.feature-core";

export const messagingFeature = getFeature({
  id: "messaging",

  dependencies: [applicationFeature],

  register: (di) => {
    autoRegister({
      di,
      targetModule: module,

      getRequireContexts: () => [require.context("./", true, /\.injectable\.(ts|tsx)$/)],
    });
  },
});
