import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { TfootProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
 *
 * The HTML `<tfoot>` element defines a set of rows summarizing the columns of the table.
 *
 *
 */
const Tfoot = ({ children, css, ...props }: TfootProps): ReactElement => {
  return (
    <motion.tfoot {...props} css={emotionCss([css])}>
      {children}
    </motion.tfoot>
  );
};
export default Tfoot;
