import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { HeadingProps } from "../types";

const H2 = ({ children, css, ...props }: HeadingProps): ReactElement => {
  return (
    <h2 css={emotionCss([css])} {...props}>
      {children}
    </h2>
  );
};

export default H2;
