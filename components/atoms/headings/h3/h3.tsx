import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { HeadingProps } from "../types";

const H3 = ({ children, css, ...props }: HeadingProps): ReactElement => {
  return (
    <h3 css={emotionCss([css])} {...props}>
      {children}
    </h3>
  );
};

export default H3;
