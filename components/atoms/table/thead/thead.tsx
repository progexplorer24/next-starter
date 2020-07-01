import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TheadProps } from "@components/types";

const Thead = ({ children, cssProp, ...props }: TheadProps): ReactElement => {
  return (
    <thead {...props} css={emotionCss([cssProp])}>
      {children}
    </thead>
  );
};

export default Thead;
