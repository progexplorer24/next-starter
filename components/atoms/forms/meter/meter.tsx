import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { MeterProps } from "@components/atoms/atom-types";

const Meter = ({ children, cssProp, ...props }: MeterProps): ReactElement => {
  return (
    <meter {...props} css={emotionCss([cssProp])}>
      {children}
    </meter>
  );
};
export default Meter;
