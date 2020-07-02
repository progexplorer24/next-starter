import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { LegendProps } from "@components/atoms/atom-types";

const Legend = ({ children, cssProp, ...props }: LegendProps): ReactElement => {
  return (
    <legend {...props} css={emotionCss([cssProp])}>
      {children}
    </legend>
  );
};
export default Legend;
