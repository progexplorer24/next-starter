import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeaderProps } from "@components/atoms/atom-types";

const Header = ({ children, cssProp, ...props }: HeaderProps): ReactElement => {
  return (
    <header {...props} css={emotionCss([cssProp])}>
      {children}
    </header>
  );
};
export default Header;
