import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { DdProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
 *
 * The HTML `<dd>` element provides the description, definition, or value for the preceding term (`<dt>`) in a description
 * list (`<dl>`).
 *
 */
const Dd = ({ children, css, ...props }: DdProps): ReactElement => {
  return (
    <motion.dd {...props} css={emotionCss([css])}>
      {children}
    </motion.dd>
  );
};
export default Dd;
