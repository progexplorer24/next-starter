import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { MarkProps } from "@components/atoms/atom-types";

const Mark = ({ children, cssProp, ...props }: MarkProps): ReactElement => {
  return (
    <mark {...props} css={emotionCss([cssProp])}>
      {children}
    </mark>
  );
};
export default Mark;
