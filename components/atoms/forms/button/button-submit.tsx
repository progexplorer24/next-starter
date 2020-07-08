import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { ButtonProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 *
 * The HTML <button> element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.
 *
 * ## Usage Notes
 *
 * - `<button>` elements are much easier to style than `<input>` elements. You can add inner HTML content, and
 * use ::after` and `::before` pseudo-elements for complex rendering.
 *
 * - A submit button with the attribute formaction set, but without an associated form does nothing. You have to set a form owner, either by
 * wrapping it in a <form> or set the attribute form to the id of the form.
 *
 * - If your buttons are not for submitting form data to a server, be sure to set their type attribute to button. Otherwise they will try to
 * submit form data and to load the (nonexistent) response, possibly destroying the current state of the document.
 *
 * ## Accessibility Concerns
 *
 * ### Icon Buttons
 *
 * Buttons that only show an icon to represent do not have an accessible name. Accessible names provide information for assistive technology,
 * such as screen readers, to access when they parse the document and generate an accessibility tree. Assistive technology then uses the
 * accessibility tree to navigate and manipulate page content.
 *
 * To give an icon button an accessible name, put text in the `<button>` element that concisely describes the button's functionality.
 *
 * #### Example
 *
 * ```
 * <button name="favorite">
 *   <svg aria-hidden="true" viewBox="0 0 10 10"><path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z"/></svg>
 *   Add to favorites
 * </button>
 * ```
 *
 * ### Size and Proximity
 *
 * - A minimum interactive size of **44x44** is recommended.
 * - Put **spacing** between interactive elements. It will help users with [motor control issues.](https://axesslab.com/hand-tremors/)
 * - Remember to add focus state to interactive elements.
 *
 *
 */
const ButtonSubmit = ({
  children,
  css,
  ...props
}: Omit<ButtonProps, "type">): ReactElement => {
  return (
    <motion.button type="submit" css={emotionCss([css])} {...props}>
      {children}
    </motion.button>
  );
};
export default ButtonSubmit;
