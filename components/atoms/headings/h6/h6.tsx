import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { HeadingProps } from "../types";

const H6 = ({ children, css, ...props }: HeadingProps): ReactElement => {
  return (
    <h6 css={emotionCss([css])} {...props}>
      {children}
    </h6>
  );
};

export default H6;
