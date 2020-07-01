import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeadingProps } from "@components/types";

const H1 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => {
  return (
    <h1 css={emotionCss([cssProp])} {...props}>
      {children}
    </h1>
  );
};

export default H1;
