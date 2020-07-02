import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SpanProps } from "@components/atoms/atom-types";

const Span = ({ children, cssProp, ...props }: SpanProps): ReactElement => {
  return (
    <span {...props} css={emotionCss([cssProp])}>
      {children}
    </span>
  );
};
export default Span;
