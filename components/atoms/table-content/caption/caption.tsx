import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { CaptionProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
 *
 * The HTML `<caption>` element specifies the caption (or title) of a table.
 *
 * ## Usage Notes
 *
 * The `<caption>` element should be the first child of its parent `<table>` element.
 *
 * When the `<table>` element that contains the `<caption>` is the only descendant of a `<figure>` element, you should use the
 * `<figcaption>` element instead of `<caption>`.
 *
 */
const Caption = ({ children, css, ...props }: CaptionProps): ReactElement => {
  return (
    <motion.caption {...props} css={emotionCss([css])}>
      {children}
    </motion.caption>
  );
};
export default Caption;
