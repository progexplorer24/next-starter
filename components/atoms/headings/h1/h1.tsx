import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";

import type { HeadingProps } from "../types";

const H1 = ({ children, css, ...props }: HeadingProps): ReactElement => {
  return (
    <h1 css={emotionCss([css])} {...props}>
      {children}
    </h1>
  );
};

export default H1;
