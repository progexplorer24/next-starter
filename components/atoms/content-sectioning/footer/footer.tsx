import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { FooterProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
 *
 * A footer typically contains information about the author of the section, copyright data or links to related documents.
 *
 * ## Usage Notes
 *
 * - Enclose information about the author in an `<address>` element that can be included into the `<footer>` element.
 * - This element is strictly informative. You shouldn't style it. (This is my interpretation).
 */
const Footer = ({ children, cssProp, ...props }: FooterProps): ReactElement => {
  return (
    <footer {...props} css={emotionCss([cssProp])}>
      {children}
    </footer>
  );
};
export default Footer;
