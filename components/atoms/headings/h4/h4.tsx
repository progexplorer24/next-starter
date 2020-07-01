import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeadingProps } from "@components/atoms/atom-types";

const H4 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => {
  return (
    <h4 css={emotionCss([cssProp])} {...props}>
      {children}
    </h4>
  );
};

export default H4;
