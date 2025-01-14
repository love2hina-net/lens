/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import "./status-brick.scss";

import React from "react";
import type { StrictReactNode } from "@love2hina-net/k8slens.utilities";
import { cssNames } from "@love2hina-net/k8slens.utilities";
import { withTooltip } from "@love2hina-net/k8slens.tooltip";

export interface StatusBrickProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: StrictReactNode;
}

export const StatusBrick = withTooltip(({ className, ...elemProps }: StatusBrickProps) => (
  <div
    className={cssNames("StatusBrick", className)}
    {...elemProps}
  />
));
