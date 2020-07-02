import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { UlProps } from "@components/atoms/atom-types";

const Ul = ({ children, cssProp, ...props }: UlProps): ReactElement => {
  return (
    <ul {...props} css={emotionCss([tw`mt-6`, cssProp])}>
      {children}
    </ul>
  );
};
export default Ul;
