import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ProgressProps } from "@components/atoms/atom-types";

const Progress = ({
  children,
  cssProp,
  ...props
}: ProgressProps): ReactElement => {
  return (
    <progress {...props} css={emotionCss([cssProp])}>
      {children}
    </progress>
  );
};
export default Progress;
