import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type FooterProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Footer = ({ children, css, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props} css={emotionCss([css])}>
      {children}
    </footer>
  );
};
export default Footer;
