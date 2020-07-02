import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FigcaptionProps } from "@components/atoms/atom-types";

const Figcaption = ({
  children,
  cssProp,
  ...props
}: FigcaptionProps): ReactElement => {
  return (
    <figcaption {...props} css={emotionCss([cssProp])}>
      {children}
    </figcaption>
  );
};
export default Figcaption;
