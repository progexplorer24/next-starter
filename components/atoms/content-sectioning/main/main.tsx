import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { MainProps } from "@components/atoms/atom-types";

const Main = ({ children, cssProp, ...props }: MainProps): ReactElement => {
  return (
    <main {...props} css={emotionCss([cssProp])}>
      {children}
    </main>
  );
};
export default Main;
