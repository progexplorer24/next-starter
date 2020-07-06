import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AsideProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
 *
 * Aside represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
 *
 * ## Usage Notes
 *
 * - Do not use the `<aside>` element to tag parenthesized text, as this kind of text is considered part of the main flow.
 *
 */
const Aside = ({ children, css, ...props }: AsideProps): ReactElement => {
  return (
    <aside {...props} css={emotionCss([css])}>
      {children}
    </aside>
  );
};
export default Aside;
