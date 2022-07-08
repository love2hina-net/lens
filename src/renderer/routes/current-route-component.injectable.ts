/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { computedInjectManyInjectable } from "@ogre-tools/injectable-extension-for-mobx";
import { matches } from "lodash/fp";
import { computed } from "mobx";
import currentRouteInjectable from "./current-route.injectable";
import { routeSpecificComponentInjectionToken } from "./route-specific-component-injection-token";

const currentRouteComponentInjectable = getInjectable({
  id: "current-route-component",

  instantiate: (di) => {
    const route = di.inject(currentRouteInjectable);
    const computedInjectMany = di.inject(computedInjectManyInjectable);
    const routeComponents = computedInjectMany(routeSpecificComponentInjectionToken);

    return computed(() => {
      const currentRoute = route.get();

      if (!currentRoute) {
        return undefined;
      }

      const routeSpecificComponent = routeComponents
        .get()
        .find(matches({ route: currentRoute }));

      return routeSpecificComponent?.Component;
    });
  },
});

export default currentRouteComponentInjectable;