import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { EmProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
 *
 * The `<em>` element is for words that have a stressed emphasis compared to surrounding text, which is often limited to a word or words of a
 * sentence and affects the meaning of the sentence itself.
 *
 * ## Usage Notes
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
const Em = ({ children, css, ...props }: EmProps): ReactElement => {
  return (
    <motion.em {...props} css={emotionCss([css])}>
      {children}
    </motion.em>
  );
};
export default Em;
