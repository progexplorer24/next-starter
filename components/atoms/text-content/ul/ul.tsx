import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { motion } from "framer-motion";
import type { UlProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
 *
 * The HTML `<ul>` element represents an unordered list of items.
 *
 * ## Usage Notes
 *
 * - The `<ul>` element is for grouping a collection of items that do not have a numerical ordering, and their order in the list
 * is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a
 * circle, or a square. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using
 * the list-style-type property.
 *
 * - The `<ul>` and `<ol>` elements may be nested as deeply as desired. Moreover, the nested lists may alternate between `<ol>`
 * and `<ul>` without restriction.
 *
 * - The `<ol>` and `<ul>` elements both represent a list of items. They differ in that, with the `<ol>` element, the order is
 *  meaningful. As a rule of thumb to determine which one to use, try changing the order of the list items; if the meaning is
 *  changed, the `<ol>` element should be used, otherwise you can use `<ul>`.
 */
const Ul = ({ children, css, ...props }: UlProps): ReactElement => {
  return (
    <motion.ul {...props} css={emotionCss([tw`mt-6`, css])}>
      {children}
    </motion.ul>
  );
};
export default Ul;
