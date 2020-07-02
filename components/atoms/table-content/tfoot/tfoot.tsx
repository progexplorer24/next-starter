import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TfootProps } from "@components/atoms/atom-types";

const Tfoot = ({ children, cssProp, ...props }: TfootProps): ReactElement => {
  return (
    <tfoot {...props} css={emotionCss([cssProp])}>
      {children}
    </tfoot>
  );
};
export default Tfoot;
