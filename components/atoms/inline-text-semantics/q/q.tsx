import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { QProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
 *
 * The HTML `<q>` element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the
 * text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the
 * `<blockquote>` element.
 */
const Q = ({ children, cssProp, ...props }: QProps): ReactElement => {
  return (
    <q {...props} css={emotionCss([cssProp])}>
      {children}
    </q>
  );
};
export default Q;
