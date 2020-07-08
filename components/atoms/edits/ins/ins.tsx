import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { InsProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
 *
 * The HTML <ins> element represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document.
 *
 * ## Accessibility concerns
 *
 * The presence of the ins element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using `announceInsEdit` helper.
 *
 */
const Ins = ({ children, css, ...props }: InsProps): ReactElement => {
  return (
    <motion.ins {...props} css={emotionCss([css])}>
      {children}
    </motion.ins>
  );
};
export default Ins;
