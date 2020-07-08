import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { CodeProps } from "@components/atoms/atom-types";
import tw from "twin.macro";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
 *
 * The HTML `<code>` element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.
 *
 * ## Usage Notes
 *
 * To represent multiple lines of code, wrap the `<code>` element within a `<pre>` element. The <code> element by itself only represents a single
 * phrase of code or line of code.
 *
 *
 */
const Code = ({ children, css, ...props }: CodeProps): ReactElement => {
  return (
    <motion.code css={emotionCss([tw`font-mono`, css])} {...props}>
      {children}
    </motion.code>
  );
};

export default Code;
