import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DelProps } from "@components/atoms/atom-types";

const Del = ({ children, cssProp, ...props }: DelProps): ReactElement => {
  return (
    <del {...props} css={emotionCss([cssProp])}>
      {children}
    </del>
  );
};
export default Del;
