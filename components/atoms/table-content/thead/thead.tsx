import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TheadProps } from "@components/atoms/atom-types";

const Thead = ({ children, css, ...props }: TheadProps): ReactElement => {
  return (
    <thead {...props} css={emotionCss([css])}>
      {children}
    </thead>
  );
};

export default Thead;
