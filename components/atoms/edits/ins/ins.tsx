import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InsProps } from "@components/atoms/atom-types";

const Ins = ({ children, cssProp, ...props }: InsProps): ReactElement => {
  return (
    <ins {...props} css={emotionCss([cssProp])}>
      {children}
    </ins>
  );
};
export default Ins;
