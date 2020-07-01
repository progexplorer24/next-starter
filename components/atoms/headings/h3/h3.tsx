import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeadingProps } from "@components/types";

const H3 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => {
  return (
    <h3 css={emotionCss([cssProp])} {...props}>
      {children}
    </h3>
  );
};

export default H3;
