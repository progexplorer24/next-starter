import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ParagraphProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
 *
 * The HTML `<p>` element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated
 * from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of
 * related content, such as images or form fields.
 *
 * ## Accessibility Concerns
 *
 * Breaking up content into paragraphs helps make a page more accessible. Screen-readers and other assistive technology provide
 * shortcuts to let their users skip to the next or previous paragraph, letting them skim content like how white space lets
 * visual users skip around.
 *
 * Using empty `<p>` elements to add space between paragraphs is problematic for people who navigate with screen-reading
 * technology. Screen readers may announce the paragraph's presence, but not any content contained within it — because there is
 * none. This can confuse and frustrate the person using the screen reader.
 *
 */
const P = ({ children, css, ...props }: ParagraphProps): ReactElement => {
  return (
    <p css={emotionCss([css])} {...props}>
      {children}
    </p>
  );
};

export default P;
