import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { StrongProps } from "@components/atoms/atom-types";

const Strong = ({ children, cssProp, ...props }: StrongProps): ReactElement => {
  return (
    <strong {...props} css={emotionCss([cssProp])}>
      {children}
    </strong>
  );
};
export default Strong;
