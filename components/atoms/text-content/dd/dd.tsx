import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DdProps } from "@components/atoms/atom-types";

const Dd = ({ children, css, ...props }: DdProps): ReactElement => {
  return (
    <dd {...props} css={emotionCss([css])}>
      {children}
    </dd>
  );
};
export default Dd;
