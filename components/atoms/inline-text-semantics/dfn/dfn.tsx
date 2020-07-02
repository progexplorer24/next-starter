import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DfnProps } from "@components/atoms/atom-types";

const Dfn = ({ children, cssProp, ...props }: DfnProps): ReactElement => {
  return (
    <dfn {...props} css={emotionCss([cssProp])}>
      {children}
    </dfn>
  );
};
export default Dfn;
