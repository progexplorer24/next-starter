import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SubProps } from "@components/atoms/atom-types";

const Sub = ({ children, cssProp, ...props }: SubProps): ReactElement => {
  return (
    <sub {...props} css={emotionCss([cssProp])}>
      {children}
    </sub>
  );
};
export default Sub;
