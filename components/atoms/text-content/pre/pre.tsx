import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { PreProps } from "@components/atoms/atom-types";

const Pre = ({ children, css, ...props }: PreProps): ReactElement => {
  return (
    <pre {...props} css={emotionCss([css])}>
      {children}
    </pre>
  );
};
export default Pre;
