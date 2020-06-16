import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { HeadingProps } from "../types";

const H4 = ({ children, css, ...props }: HeadingProps): ReactElement => {
  return (
    <h4 css={emotionCss([css])} {...props}>
      {children}
    </h4>
  );
};

export default H4;
