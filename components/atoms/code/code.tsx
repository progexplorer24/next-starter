import React, { ReactNode, ReactElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";

export type CodeProps = {
  css?: SerializedStyles;
  children: ReactNode;
  className?: string;
};

const Code = ({ children, css, ...props }: CodeProps): ReactElement => {
  return (
    <code css={emotionCss([css])} {...props}>
      {children}
    </code>
  );
};

export default Code;
