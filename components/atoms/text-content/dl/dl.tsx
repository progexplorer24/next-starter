import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DlProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 *
 * The HTML `<dl>` element represents a description list. The element encloses a list of groups of terms (specified using the `
 * <dt>` element) and descriptions (provided by `<dd>` elements). Common uses for this element are to implement a glossary or to
 * display metadata (a list of key-value pairs).
 *
 * ## Accessibility Concerns
 *
 * Each screen reader announces `<dl>` content differently. Some screen readers, such as VoiceOver on iOS, will not announce
 * that `<dl>` content is a list. Because of this, make sure each list item's content is written in such a way that it
 * communicates its relationship to the other list items in the list grouping.
 *
 */
const Dl = ({ children, css, ...props }: DlProps): ReactElement => {
  return (
    <dl {...props} css={emotionCss([css])}>
      {children}
    </dl>
  );
};
export default Dl;
