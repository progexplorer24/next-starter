import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { NavProps } from "@components/types";

const Nav = ({ children, cssProp, ...props }: NavProps): ReactElement => {
  return (
    <nav {...props} css={emotionCss([cssProp])}>
      {children}
    </nav>
  );
};
export default Nav;
