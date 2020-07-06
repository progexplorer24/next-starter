import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ColProps } from "@components/atoms/atom-types";

const Col = ({ css, ...props }: ColProps): ReactElement => {
  return <col {...props} css={emotionCss([css])} />;
};
export default Col;
