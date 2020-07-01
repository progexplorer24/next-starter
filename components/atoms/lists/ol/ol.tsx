import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { OlProps } from "@components/atoms/atom-types";

const Ol = ({ children, cssProp, ...props }: OlProps): ReactElement => {
  return (
    <ol css={emotionCss([tw`mt-6`, cssProp])} {...props}>
      {children}
    </ol>
  );
};

export default Ol;
