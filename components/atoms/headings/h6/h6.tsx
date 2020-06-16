import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { HeadingProps } from "../types";

const H6 = ({ children, css, ...props }: HeadingProps): ReactElement => {
  return (
    <div css={emotionCss([css])} {...props}>
      {children}
    </div>
  );
};

export default H6;
