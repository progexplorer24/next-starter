import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { QProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
 *
 * The HTML `<q>` element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the
 * text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the
 * `<blockquote>` element.
 */
const Q = ({ children, css, ...props }: QProps): ReactElement => {
  return (
    <motion.q {...props} css={emotionCss([css])}>
      {children}
    </motion.q>
  );
};
export default Q;
