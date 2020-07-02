import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { LabelProps } from "@components/atoms/atom-types";

const Label = ({ children, cssProp, ...props }: LabelProps): ReactElement => {
  return (
    <label {...props} css={emotionCss([cssProp])}>
      {children}
    </label>
  );
};
export default Label;
