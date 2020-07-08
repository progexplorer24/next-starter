import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { OptgroupProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
 *
 * The HTML `<optgroup>` element creates a grouping of options within a `<select>` element.
 */
const Optgroup = ({ children, css, ...props }: OptgroupProps): ReactElement => {
  return (
    <motion.optgroup {...props} css={emotionCss([css])}>
      {children}
    </motion.optgroup>
  );
};
export default Optgroup;
