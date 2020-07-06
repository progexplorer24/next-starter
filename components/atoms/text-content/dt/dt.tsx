import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DtProps } from "@components/atoms/atom-types";

const Dt = ({ children, css, ...props }: DtProps): ReactElement => {
  return (
    <dt {...props} css={emotionCss([css])}>
      {children}
    </dt>
  );
};
export default Dt;
