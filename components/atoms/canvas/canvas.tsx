import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { CanvasProps } from "@components/atoms/atom-types";

const Canvas = ({ children, css, ...props }: CanvasProps): ReactElement => {
  return (
    <canvas {...props} css={emotionCss([css])}>
      {children}
    </canvas>
  );
};
export default Canvas;
