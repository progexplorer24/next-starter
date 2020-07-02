import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AreaProps } from "@atoms/atom-types";

const Area = ({ cssProp, alt = "", ...props }: AreaProps): ReactElement => {
  return <area alt={alt} {...props} css={emotionCss([cssProp])} />;
};
export default Area;
