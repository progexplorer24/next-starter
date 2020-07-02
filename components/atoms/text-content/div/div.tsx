import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DivProps } from "@components/atoms/atom-types";

const Div = ({ children, cssProp, ...props }: DivProps): ReactElement => {
  return (
    <div {...props} css={emotionCss([cssProp])}>
      {children}
    </div>
  );
};
export default Div;
