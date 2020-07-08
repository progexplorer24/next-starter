import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import { NavProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
 *
 * The HTML `<nav>` element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
 *
 * ## Usage Notes
 *
 * - It's not necessary for all links to be contained in a <nav> element. <nav> is intended only for major block of navigation links; typically the <footer> element often has a list of links that don't need to be in a <nav> element.
 * - If you have several nav elements on one page use `aria-labelledby` element to promote accessibility.
 * User agents, such as screen readers targeting disabled users, can use this element to determine whether to omit the initial rendering of navigation-only content.
 *
 * ## Accessibility concerns
 *
 * ### Multiple Navigations
 * Add `aria-labelledby` when you have more than one `nav` element on your page.
 *
 * ```
 * <header>
 *  <nav aria-labelledby="primary-navigation">
 *   <h2 id="primary-navigation">Primary navigation</h2>
 *     <!-- navigation items -->
 *  </nav>
 * </header>
 *
 * <!-- page content -->
 *
 *<footer>
 *  <nav aria-labelledby="footer-navigation">
 *    <h2 id="footer-navigation">Footer navigation</h2>
 *    <!-- navigation items -->
 *  </nav>
 *</footer
 * ```
 */
const Nav = ({ children, css, ...props }: NavProps): ReactElement => {
  return (
    <motion.nav {...props} css={emotionCss([css])}>
      {children}
    </motion.nav>
  );
};
export default Nav;
