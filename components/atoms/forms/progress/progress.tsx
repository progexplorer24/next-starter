import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { ProgressProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
 *
 * The HTML `<progress>` element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 *
 * ## Usage Notes
 *
 * - Unlike the `<meter>` element, the minimum value is always 0, and the min attribute is not allowed for the `<progress>` element.
 *
 * - The `:indeterminate` pseudo-class can be used to match against indeterminate progress bars. To change the progress bar to indeterminate
 *  after giving it a value you must remove the value attribute with `element.removeAttribute('value')`.
 *
 */
const Progress = ({ children, css, ...props }: ProgressProps): ReactElement => {
  return (
    <motion.progress {...props} css={emotionCss([css])}>
      {children}
    </motion.progress>
  );
};
export default Progress;
