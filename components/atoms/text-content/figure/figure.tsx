import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FigureProps } from "@components/atoms/atom-types";

const Figure = ({ children, cssProp, ...props }: FigureProps): ReactElement => {
  return (
    <figure {...props} css={emotionCss([cssProp])}>
      {children}
    </figure>
  );
};
export default Figure;
