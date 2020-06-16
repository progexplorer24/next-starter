import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { HeadingProps } from "../types";

const H5 = ({ children, css, ...props }: HeadingProps): ReactElement => {
  return (
    <h5 css={emotionCss([css])} {...props}>
      {children}
    </h5>
  );
};

export default H5;
