import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { CiteProps } from "@components/atoms/atom-types";

const Cite = ({ children, cssProp, ...props }: CiteProps): ReactElement => {
  return (
    <cite {...props} css={emotionCss([cssProp])}>
      {children}
    </cite>
  );
};
export default Cite;
