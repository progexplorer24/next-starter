import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FigcaptionProps } from "@components/atoms/atom-types";

const Figcaption = ({
  children,
  css,
  ...props
}: FigcaptionProps): ReactElement => {
  return (
    <figcaption {...props} css={emotionCss([css])}>
      {children}
    </figcaption>
  );
};
export default Figcaption;
