import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { IframeProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
 *
 * The HTML Inline Frame element represents a nested browsing context, embedding another HTML page into the current one.
 *
 * ## Warnings!
 *
 * Because each browsing context is a complete document environment, every `<iframe>` in a page requires increased memory and other computing resources. While theoretically you can use as many `<iframe>`s as you like, check for performance problems.
 *
 * ## Accessibility concerns
 *
 * People navigating with assistive technology such as a screen reader can use the title attribute on an `<iframe>` to label its content. The title's value should concisely describe the embedded content.
 *
 */
const Iframe = ({ children, css, ...props }: IframeProps): ReactElement => {
  return (
    <motion.iframe {...props} css={emotionCss([css])}>
      {children}
    </motion.iframe>
  );
};
export default Iframe;
