import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { EmProps } from "@components/atoms/atom-types";

const Em = ({ children, cssProp, ...props }: EmProps): ReactElement => {
  return (
    <em {...props} css={emotionCss([cssProp])}>
      {children}
    </em>
  );
};
export default Em;
