import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { UProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
 *
 * The HTML Unarticulated Annotation Element (`<u>`) represents a span of inline text which should be rendered in a way that indicates that it
 * has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.
 *
 * ## Usage Notes
 *
 * Valid use cases for the `<u>` element include annotating spelling errors, applying a proper name mark to denote proper names in Chinese text,
 * and other forms of annotation.
 *
 *  You should not use <u> to simply underline text for presentation purposes, or to denote titles of books.
 *
 * In most cases, you should use an element other than <u>, such as:
 * - **`<em>`**
 * - **`<mark>`**
 * - **`<strong>`**
 * - **`<cite>`**
 *
 */
const U = ({ children, css, ...props }: UProps): ReactElement => {
  return (
    <motion.u {...props} css={emotionCss([css])}>
      {children}
    </motion.u>
  );
};
export default U;
