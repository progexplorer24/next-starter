import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { IframeProps } from "@components/atoms/atom-types";

const Iframe = ({ children, cssProp, ...props }: IframeProps): ReactElement => {
  return (
    <div {...props} css={emotionCss([cssProp])}>
      {children}
    </div>
  );
};
export default Iframe;
