import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type TheadProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Thead = ({ children, css, ...props }: TheadProps): ReactElement => {
  return (
    <thead {...props} css={emotionCss([css])}>
      {children}
    </thead>
  );
};

export default Thead;
