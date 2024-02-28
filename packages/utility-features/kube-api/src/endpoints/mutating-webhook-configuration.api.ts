/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { MutatingWebhookConfiguration } from "@love2hina-net/k8slens.kube-object";
import type { DerivedKubeApiOptions, KubeApiDependencies } from "../kube-api";
import { KubeApi } from "../kube-api";

export class MutatingWebhookConfigurationApi extends KubeApi<MutatingWebhookConfiguration> {
  constructor(deps: KubeApiDependencies, opts?: DerivedKubeApiOptions) {
    super(deps, {
      ...(opts ?? {}),
      objectConstructor: MutatingWebhookConfiguration,
    });
  }
}
