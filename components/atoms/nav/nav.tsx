import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type NavProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Nav = ({ children, css, ...props }: NavProps): JSX.Element => {
  return (
    <nav {...props} css={emotionCss([css])}>
      {children}
    </nav>
  );
};
export default Nav;
