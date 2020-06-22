import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type MainProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Main = ({ children, css, ...props }: MainProps): JSX.Element => {
  return (
    <main {...props} css={emotionCss([css])}>
      {children}
    </main>
  );
};
export default Main;
