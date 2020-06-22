import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type HeaderProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Header = ({ children, css, ...props }: HeaderProps): ReactElement => {
  return (
    <header {...props} css={emotionCss([css])}>
      {children}
    </header>
  );
};
export default Header;
