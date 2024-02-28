import type { StrictReactNode } from "@love2hina-net/k8slens.utilities";
import React from "react";

export interface KeyboardShortcutScopeProps {
  id: string;
  children: StrictReactNode;
}

export const KeyboardShortcutScope = ({ id, children }: KeyboardShortcutScopeProps) => (
  <div data-keyboard-shortcut-scope={id} data-keyboard-shortcut-scope-test={id} tabIndex={-1}>
    {children}
  </div>
);
