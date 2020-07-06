import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { IProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
 *
 * The HTML Interesting Text element (`<i>`) represents a range of text that is set off from the normal text for some reason. Some examples
 * include technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.
 *
 * ## Usage Notes
 *
 * - Use the `<i>` element for text that is set off from the normal prose for readability reasons. This would be a range of text with different
 * semantic meaning than the surrounding text.
 *
 * - In earlier versions of the HTML specification, the `<i>` element was merely a presentational element used to display text in italics, much
 * like the `<b>` element was used to display text in bold letters. This is no longer true, as these tags now define semantics rather than
 * typographic appearance. A browser will typically still display the contents of the <i> element in italic type, but is, by definition, no
 * longer required to do so.
 *
 * - Be sure the text in question is not actually more appropriately marked up with another element.
 *    - Use `<em>` to indicate stress emphasis.
 *    - Use `<strong>` to indicate importance, seriousness, or urgency.
 *    - Use `<mark>` to indicate relevance.
 *    - Use `<cite>` to mark up the name of a work, such as a book, play, or song.
 *    - Use `<dfn>` to mark up the defining instance of a term.
 *
 *
 * ### `<i>` vs `<em>`
 *
 * - Use the <cite> element to mark the title of a work (book, play, song, etc.).
 * - Use the <i> element to mark text that is in an alternate tone or mood, which covers many common situations for italics such as scientific
 *   names or words in other languages.
 * - Use the `<strong>` element to mark text that has greater importance than surrounding text.
 *
 * New developers are often confused at seeing multiple elements that produce similar results. `<em>` and `<i>` are a common example, since they
 * both italicize text. What's the difference? Which should you use?
 *
 * An example for `<em>` could be: "Just *do* it already!", or: "We *had* to do something about it". A person or software reading the text would
 * pronounce the words in italics with an emphasis, using verbal stress.
 *
 * An example for `<i>` could be: "The *Queen Mary* sailed last night". Here, there is no added emphasis or importance on the word "Queen Mary".
 * It is merely indicated that the object in question is not a queen named Mary, but a ship named Queen Mary. Another example for <i> could be: "
 * The word *the* is an article".
 *
 */
const I = ({ children, cssProp, ...props }: IProps): ReactElement => {
  return (
    <i {...props} css={emotionCss([cssProp])}>
      {children}
    </i>
  );
};
export default I;
