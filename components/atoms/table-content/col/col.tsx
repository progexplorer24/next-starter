import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ColProps } from "@components/atoms/atom-types";

const Col = ({ cssProp, ...props }: ColProps): ReactElement => {
  return <col {...props} css={emotionCss([cssProp])} />;
};
export default Col;
