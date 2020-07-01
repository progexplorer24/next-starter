import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeadingProps } from "@components/atoms/atom-types";

const H6 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => {
  return (
    <h6 css={emotionCss([cssProp])} {...props}>
      {children}
    </h6>
  );
};

export default H6;
