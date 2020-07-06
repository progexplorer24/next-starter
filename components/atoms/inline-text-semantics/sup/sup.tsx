import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SupProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
 *
 * The HTML Superscript element (`<sup>`) specifies inline text which is to be displayed as superscript for solely typographical reasons.
 * Superscripts are usually rendered with a raised baseline using smaller text.
 *
 * ## Usage Notes
 *
 * The `<sup>` element should only be used for typographical reasons—that is, to change the position of the text to comply with typographical
 * conventions or standards, rather than solely for presentation or appearance purposes.
 *
 * Appropriate use cases for `<sup>` include (but aren't necessarily limited to):
 *
 * - Displaying exponents
 * - Displaying superior lettering, which is used in some languages when rendering certain abbreviations.
 * - Representing ordinal numbers
 */
const Sup = ({ children, cssProp, ...props }: SupProps): ReactElement => {
  return (
    <sup {...props} css={emotionCss([cssProp])}>
      {children}
    </sup>
  );
};
export default Sup;
