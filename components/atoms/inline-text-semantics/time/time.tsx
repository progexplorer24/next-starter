import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TimeProps } from "@components/atoms/atom-types";

const Time = ({ children, cssProp, ...props }: TimeProps): ReactElement => {
  return (
    <time {...props} css={emotionCss([cssProp])}>
      {children}
    </time>
  );
};
export default Time;
