import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ColgroupProps } from "@components/atoms/atom-types";

const Colgroup = ({
  children,
  cssProp,
  ...props
}: ColgroupProps): ReactElement => {
  return (
    <colgroup {...props} css={emotionCss([cssProp])}>
      {children}
    </colgroup>
  );
};
export default Colgroup;
