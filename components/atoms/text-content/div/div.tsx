import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DivProps } from "@components/atoms/atom-types";
import { motion } from "framer-motion";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 *
 * The HTML Content Division element (`<div>`) is the generic container for flow content. It has no effect on the content or
 * layout until styled using CSS.
 *
 * ## Usage Notes
 *
 * The `<div>` element should be used only when no other semantic element (such as `<article>` or `<nav>`) is appropriate.
 */
const Div = ({ children, css, ...props }: DivProps): ReactElement => {
  return (
    <motion.div {...props} css={emotionCss([css])}>
      {children}
    </motion.div>
  );
};
export default Div;
