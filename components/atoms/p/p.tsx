import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ParagraphProps } from "@components/types";

const P = ({ children, cssProp, ...props }: ParagraphProps): ReactElement => {
  return (
    <p css={emotionCss([cssProp])} {...props}>
      {children}
    </p>
  );
};

export default P;
