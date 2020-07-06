import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { CaptionProps } from "@components/atoms/atom-types";

const Caption = ({ children, css, ...props }: CaptionProps): ReactElement => {
  return (
    <caption {...props} css={emotionCss([css])}>
      {children}
    </caption>
  );
};
export default Caption;
