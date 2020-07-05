import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { MeterProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 *
 * The HTML `<meter>` element represents either a scalar value within a known range or a fractional value.
 *
 *
 */
const Meter = ({ children, cssProp, ...props }: MeterProps): ReactElement => {
  return (
    <meter {...props} css={emotionCss([cssProp])}>
      {children}
    </meter>
  );
};
export default Meter;
