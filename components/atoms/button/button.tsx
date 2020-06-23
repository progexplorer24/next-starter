import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type ButtonProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Button = ({ children, css, ...props }: ButtonProps): ReactElement => {
  return (
    <button type="button" css={emotionCss([css])} {...props}>
      {children}
    </button>
  );
};
export default Button;
