import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  cssProp?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Button = ({ children, cssProp, ...props }: ButtonProps): ReactElement => {
  return (
    <button
      type="button"
      css={emotionCss([tw`min-w-11 min-h-11`, cssProp])}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
