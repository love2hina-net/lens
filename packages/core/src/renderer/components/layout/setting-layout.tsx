/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import "./setting-layout.scss";

import React from "react";
import { observer } from "mobx-react";
import type { IClassName, StrictReactNode } from "@love2hina-net/k8slens.utilities";
import { cssNames } from "@love2hina-net/k8slens.utilities";
import { CloseButton } from "./close-button";
import { getLegacyGlobalDiForExtensionApi } from "@love2hina-net/k8slens.legacy-global-di";
import navigateToCatalogInjectable from "../../../common/front-end-routing/routes/catalog/navigate-to-catalog.injectable";
import { observableHistoryInjectionToken } from "@love2hina-net/k8slens.routing";

export interface SettingLayoutProps extends React.DOMAttributes<any> {
  className?: IClassName;
  contentClass?: IClassName;
  provideBackButtonNavigation?: boolean;
  contentGaps?: boolean;
  navigation?: StrictReactNode;
  back?: (evt: React.MouseEvent | KeyboardEvent) => void;
  closeButtonProps?: { "data-testid"?: string };
}

const defaultProps: Partial<SettingLayoutProps> = {
  closeButtonProps: {},
  provideBackButtonNavigation: true,
  contentGaps: true,
  back: () => {
    const di = getLegacyGlobalDiForExtensionApi();
    const navigateToCatalog = di.inject(navigateToCatalogInjectable);
    const observableHistory = di.inject(observableHistoryInjectionToken);

    if (observableHistory.length <= 1) {
      navigateToCatalog();
    } else {
      observableHistory.goBack();
    }
  },
};

/**
 * Layout for settings like pages with navigation
 */
@observer
export class SettingLayout extends React.Component<SettingLayoutProps> {
  static defaultProps = defaultProps as object;

  async componentDidMount() {
    const { hash } = window.location;

    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    }

    window.addEventListener("keydown", this.onEscapeKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscapeKey);
  }

  onEscapeKey = (evt: KeyboardEvent) => {
    if (!this.props.provideBackButtonNavigation) {
      return;
    }

    if (evt.code === "Escape") {
      evt.stopPropagation();
      this.props.back?.(evt);
    }
  };

  render() {
    const {
      contentClass, provideBackButtonNavigation,
      contentGaps, navigation, children, back, closeButtonProps, ...elemProps
    } = this.props;
    const className = cssNames("SettingLayout", { showNavigation: navigation }, this.props.className);

    return (
      <div {...elemProps} className={className}>
        { navigation && (
          <nav className="sidebarRegion">
            <div className="sidebar">
              {navigation}
            </div>
          </nav>
        )}
        <div className="contentRegion" id="ScrollSpyRoot">
          <div className={cssNames("content", contentClass, contentGaps && "flex column gaps")}>
            {children}
          </div>
          <div className="toolsRegion">
            {
              this.props.provideBackButtonNavigation && (
                <div className="fixed top-[60px]">

                  <CloseButton onClick={back} {...closeButtonProps}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
