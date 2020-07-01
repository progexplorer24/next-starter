import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { AbbrProps } from "@components/types";

const Abbr = ({ children, cssProp, ...props }: AbbrProps): ReactElement => {
  return (
    <abbr {...props} css={emotionCss([cssProp])}>
      {children}
    </abbr>
  );
};
export default Abbr;
