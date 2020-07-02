import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SvgProps } from "@components/atoms/atom-types";

const Svg = ({ children, cssProp, ...props }: SvgProps): ReactElement => {
  return (
    <svg {...props} css={emotionCss([cssProp])}>
      {children}
    </svg>
  );
};
export default Svg;
