import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { StrongProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
 *
 * The HTML Strong Importance Element (`<strong>`) indicates that its contents have strong importance, seriousness, or urgency. Browsers
 * typically render the contents in bold type.
 *
 * ## Usage Notes
 *
 * The `<strong>` element is for content that is of "strong importance," including things of great seriousness or urgency (such as warnings).
 * This could be a sentence that is of great importance to the whole page, or you could merely try to point out that some words are of greater
 * importance compared to nearby content.
 *
 * Typically this element is rendered by default using a bold font weight. However, it should not be used simply to apply bold styling; use the
 * CSS font-weight property for that purpose. Use the `<b>` element to draw attention to certain text without indicating a higher level of
 * importance. Use the `<em>` element to mark text that has stress emphasis.
 *
 * Another accepted use for `<strong>` is to denote the labels of paragraphs which represent notes or warnings within the text of a page.
 *
 * ### `<em>` vs `<strong>`
 *
 * Adding to the confusion is the fact that while HTML 4 defined `<strong>` as simply indicating a stronger emphasis, HTML 5 defines `<strong>`
 * as representing "strong importance for its contents." This is an important distinction to make.
 *
 * While `<em>` is used to change the meaning of a sentence as spoken emphasis does ("I *love* carrots" vs. "I love *carrots*"), `<strong>` is
 * used to give portions of a sentence added importance (e.g., "Warning! This is very dangerous.") Both `<strong>` and `<em>` can be nested to
 * increase the relative degree of importance or stress emphasis, respectively.
 */
const Strong = ({ children, css, ...props }: StrongProps): ReactElement => {
  return (
    <strong {...props} css={emotionCss([css])}>
      {children}
    </strong>
  );
};
export default Strong;
