import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

export type ParagraphProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const P = ({ children, css, ...props }: ParagraphProps): ReactElement => {
  return (
    <p css={emotionCss([css])} {...props}>
      {children}
    </p>
  );
};

export default P;
