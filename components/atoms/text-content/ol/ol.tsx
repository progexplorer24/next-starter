import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { motion } from "framer-motion";
import type { OlProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 *
 * The HTML `<ol>` element represents an ordered list of items — typically rendered as a numbered list.
 *
 * ## Usage Notes
 *
 * The `<ol>` and `<ul>` elements may nest as deeply as desired, alternating between `<ol>` and `<ul>` however you like.
 *
 * The `<ol>` and `<ul>` elements both represent a list of items. The difference is with the `<ol>` element, the order is
 * meaningful. For example:
 *
 * - Steps in a recipe
 * - Turn-by-turn directions
 * - The list of ingredients in decreasing proportion on nutrition information labels
 *
 * To determine which list to use, try changing the order of the list items; if the meaning changes, use the `<ol>` element —
 * otherwise you can use `<ul>`.
 */
const Ol = ({ children, css, ...props }: OlProps): ReactElement => {
  return (
    <motion.ol css={emotionCss([tw`mt-6`, css])} {...props}>
      {children}
    </motion.ol>
  );
};

export default Ol;
