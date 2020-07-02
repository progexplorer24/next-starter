import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { ButtonProps } from "@components/atoms/atom-types";

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
