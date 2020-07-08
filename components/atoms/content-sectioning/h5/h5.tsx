import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { H5Props } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
 *
 * The **HTML `<h1>–<h6>`** elements represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest.
 *
 * ## Usage Notes
 *
 * - Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.
 * - Avoid using heading tags to resize text. Instead, use the CSS font-size property. Headings use size to indicate their relative importance, but CSS is preferred for general-purpose resizing.
 * - Avoid skipping heading levels: always start from `<h1>`, next use `<h2>` and so on.
 * - You should only use one `<h1>` per page. Using more than one will not result in an error, but using only one is seen as a best practice. It makes logical sense — `<h1>` is the most important heading, and tells you what the purpose of the overall page is. You wouldn't have a book with more than one title, or a movie with more than one name! Having a single top-level title is also arguably better for screenreader users, and SEO.
 *
 * ## Accessibility Concerns
 *
 * ### Navigation
 *
 * A common navigation technique for users of screen reading software is jumping from heading to heading to quickly determine the content of the page. Because of this, it is important to not skip one or more heading levels. Doing so may create confusion, as the person navigating this way may be left wondering where the missing heading is.
 *
 * ### Labeling Section Content
 *
 * Sectioning content can be labeled using a combination of the aria-labelledby and id attributes, with the label concisely describing the purpose of the section. This technique is useful for situations where there is more than one sectioning element on the same page.
 */
const H5 = ({ children, css, ...props }: H5Props): ReactElement => {
  return (
    <motion.h5 css={emotionCss([css])} {...props}>
      {children}
    </motion.h5>
  );
};

export default H5;
