import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { CodeProps } from "@components/atoms/atom-types";
import tw from "twin.macro";

const Code = ({ children, cssProp, ...props }: CodeProps): ReactElement => {
  return (
    <code css={emotionCss([tw`font-mono`, cssProp])} {...props}>
      {children}
    </code>
  );
};

export default Code;
