import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { CanvasProps } from "@components/atoms/atom-types";

const Canvas = ({ children, cssProp, ...props }: CanvasProps): ReactElement => {
  return (
    <canvas {...props} css={emotionCss([cssProp])}>
      {children}
    </canvas>
  );
};
export default Canvas;
