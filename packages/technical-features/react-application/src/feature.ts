import { getFeature } from "@love2hina-net/k8slens.feature-core";
import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { applicationFeature } from "@love2hina-net/k8slens.application";

export const reactApplicationFeature = getFeature({
  id: "react-application",

  register: (di) => {
    autoRegister({
      di,
      targetModule: module,
      getRequireContexts: () => [require.context("./", true, /\.injectable\.(ts|tsx)$/)],
    });
  },

  dependencies: [applicationFeature],
});
