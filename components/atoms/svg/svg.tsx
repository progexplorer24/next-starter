import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SvgProps } from "@components/atoms/atom-types";

const Svg = ({ children, css, ...props }: SvgProps): ReactElement => {
  return (
    <svg {...props} css={emotionCss([css])}>
      {children}
    </svg>
  );
};
export default Svg;
