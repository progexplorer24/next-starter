import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { SectionProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
 *
 * The HTML <section> element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document. Typically, but not always, sections have a heading.
 *
 * ## Usage Notes
 *
 * - Sections typically have heading element as a child.
 * - If it makes sense to separately syndicate the content of a `<section>` element, use an `<article>` element instead.
 * - Do not use the `<section>` element as a generic container; this is what `<div>` is for, especially when the sectioning is only for styling purposes. A rule of thumb is that a section should logically appear in the outline of a document.
 *
 */
const Section = ({ children, css, ...props }: SectionProps): ReactElement => {
  return (
    <motion.section {...props} css={emotionCss([css])}>
      {children}
    </motion.section>
  );
};
export default Section;
