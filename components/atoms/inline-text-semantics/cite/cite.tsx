import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { CiteProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
 *
 * The HTML Citation element (`<cite>`) is used to describe a reference to a cited creative work, and must include the title of that work. The
 * reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 *
 * ## Usage Notes
 *
 */
const Cite = ({ children, css, ...props }: CiteProps): ReactElement => {
  return (
    <cite {...props} css={emotionCss([css])}>
      {children}
    </cite>
  );
};
export default Cite;
