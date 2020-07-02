import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { CaptionProps } from "@components/atoms/atom-types";

const Caption = ({
  children,
  cssProp,
  ...props
}: CaptionProps): ReactElement => {
  return (
    <caption {...props} css={emotionCss([cssProp])}>
      {children}
    </caption>
  );
};
export default Caption;
