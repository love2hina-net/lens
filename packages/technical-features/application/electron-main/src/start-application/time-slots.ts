import { getInjectionToken } from "@ogre-tools/injectable";
import type { RunnableSync } from "@love2hina-net/k8slens.run-many";

export const beforeAnythingInjectionToken = getInjectionToken<RunnableSync>({
  id: "before-anything",
});

export const beforeElectronIsReadyInjectionToken = getInjectionToken<RunnableSync>({
  id: "before-electron-is-ready-injection-token",
});
