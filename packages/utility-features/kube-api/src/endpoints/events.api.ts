/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { KubeEventData } from "@love2hina-net/k8slens.kube-object";
import { KubeEvent } from "@love2hina-net/k8slens.kube-object";
import type { DerivedKubeApiOptions, KubeApiDependencies } from "../kube-api";
import { KubeApi } from "../kube-api";

export class KubeEventApi extends KubeApi<KubeEvent, KubeEventData> {
  constructor(deps: KubeApiDependencies, opts: DerivedKubeApiOptions = {}) {
    super(deps, {
      objectConstructor: KubeEvent,
      ...opts,
    });
  }
}
