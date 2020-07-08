import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { ColgroupProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)
 *
 * The HTML `<colgroup>` element defines a group of columns within a table.
 *
 */
const Colgroup = ({ children, css, ...props }: ColgroupProps): ReactElement => {
  return (
    <motion.colgroup {...props} css={emotionCss([css])}>
      {children}
    </motion.colgroup>
  );
};
export default Colgroup;
