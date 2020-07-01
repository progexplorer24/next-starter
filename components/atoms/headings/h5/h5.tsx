import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeadingProps } from "@components/types";

const H5 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => {
  return (
    <h5 css={emotionCss([cssProp])} {...props}>
      {children}
    </h5>
  );
};

export default H5;
