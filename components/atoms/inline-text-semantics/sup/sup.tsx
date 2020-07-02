import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SupProps } from "@components/atoms/atom-types";

const Sup = ({ children, cssProp, ...props }: SupProps): ReactElement => {
  return (
    <sup {...props} css={emotionCss([cssProp])}>
      {children}
    </sup>
  );
};
export default Sup;
