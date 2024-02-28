import { getFeature } from "@love2hina-net/k8slens.feature-core";
import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { reactApplicationFeature } from "@love2hina-net/k8slens.react-application";

export const keyboardShortcutsFeature = getFeature({
  id: "keyboard-shortcuts",

  register: (di) => {
    autoRegister({
      di,
      targetModule: module,
      getRequireContexts: () => [require.context("./", true, /\.injectable\.(ts|tsx)$/)],
    });
  },

  dependencies: [reactApplicationFeature],
});
