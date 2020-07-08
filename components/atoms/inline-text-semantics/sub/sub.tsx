import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { SubProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
 *
 * The HTML Subscript element (`<sub>`) specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts
 * are typically rendered with a lowered baseline using smaller text.
 *
 * ## Usage Notes
 *
 * The `<sub>` element should be used only for typographical reasons—that is, to change the position of the text to comply with typographical
 * conventions or standards, rather than solely for presentation or appearance purposes.
 *
 * Appropriate use cases for `<sub>` include (but aren't necessarily limited to):
 *
 * - Marking up footnote numbers. See Footnote numbers for an example.
 * - Marking up the subscript in mathematical variable numbers (although you may also consider using a MathML formula for this). See Variable
 * subscripts.
 * - Denoting the number of atoms of a given element within a chemical formula.
 */
const Sub = ({ children, css, ...props }: SubProps): ReactElement => {
  return (
    <motion.sub {...props} css={emotionCss([css])}>
      {children}
    </motion.sub>
  );
};
export default Sub;
