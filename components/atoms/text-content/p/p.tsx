import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ParagraphProps } from "@components/atoms/atom-types";

const P = ({ children, css, ...props }: ParagraphProps): ReactElement => {
  return (
    <p css={emotionCss([css])} {...props}>
      {children}
    </p>
  );
};

export default P;
