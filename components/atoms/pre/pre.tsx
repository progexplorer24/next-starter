import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type PreProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Pre = ({ children, css, ...props }: PreProps): JSX.Element => {
  return (
    <pre {...props} css={emotionCss([css])}>
      {children}
    </pre>
  );
};
export default Pre;
