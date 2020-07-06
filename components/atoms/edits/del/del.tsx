import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DelProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
 *
 * The HTML <del> element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document.
 *
 * ## Accessibility concerns
 *
 * The presence of the del element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using `announceDelEdit` helper.
 *
 */
const Del = ({ children, css, ...props }: DelProps): ReactElement => {
  return (
    <del {...props} css={emotionCss([css])}>
      {children}
    </del>
  );
};
export default Del;
