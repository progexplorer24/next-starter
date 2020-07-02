import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { QProps } from "@components/atoms/atom-types";

const Q = ({ children, cssProp, ...props }: QProps): ReactElement => {
  return (
    <q {...props} css={emotionCss([cssProp])}>
      {children}
    </q>
  );
};
export default Q;
