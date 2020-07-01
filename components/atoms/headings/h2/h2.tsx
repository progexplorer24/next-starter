import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeadingProps } from "@components/types";

const H2 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => {
  return (
    <h2 css={emotionCss([cssProp])} {...props}>
      {children}
    </h2>
  );
};

export default H2;
