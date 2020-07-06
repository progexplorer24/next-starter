import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DivProps } from "@components/atoms/atom-types";

const Div = ({ children, css, ...props }: DivProps): ReactElement => {
  return (
    <div {...props} css={emotionCss([css])}>
      {children}
    </div>
  );
};
export default Div;
