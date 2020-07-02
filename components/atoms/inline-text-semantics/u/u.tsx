import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { UProps } from "@components/atoms/atom-types";

const U = ({ children, cssProp, ...props }: UProps): ReactElement => {
  return (
    <u {...props} css={emotionCss([cssProp])}>
      {children}
    </u>
  );
};
export default U;
