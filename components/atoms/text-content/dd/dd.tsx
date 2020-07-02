import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DdProps } from "@components/atoms/atom-types";

const Dd = ({ children, cssProp, ...props }: DdProps): ReactElement => {
  return (
    <dd {...props} css={emotionCss([cssProp])}>
      {children}
    </dd>
  );
};
export default Dd;
