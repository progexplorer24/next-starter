import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SourceProps } from "@components/atoms/atom-types";

const Source = ({ cssProp, ...props }: SourceProps): ReactElement => {
  return <source {...props} css={emotionCss([cssProp])} />;
};
export default Source;
