import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { FooterProps } from "@components/types";

const Footer = ({ children, cssProp, ...props }: FooterProps): ReactElement => {
  return (
    <footer {...props} css={emotionCss([cssProp])}>
      {children}
    </footer>
  );
};
export default Footer;
