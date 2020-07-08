import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import { AbbrProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
 *
 * The HTML Abbreviation element (`<abbr>`) represents an abbreviation or acronym; the optional `title` attribute can provide an expansion or
 * description for the abbreviation. If present, `title` must contain this full description and nothing else.
 *
 * ## Usage Notes
 *
 * It's certainly not required that all abbreviations be marked up using `<abbr>`. There are, though, a few cases where it's helpful to do so:
 *
 * - When an abbreviation is used and you want to provide an expansion or definition outside the flow of the document's content, use <abbr> with
 *  an appropriate title.
 *
 * - To define an abbreviation which may be unfamiliar to the reader, present the term using `<abbr>` and either a title attribute or inline text
 *  providing the definition.
 *
 * - When an abbreviation's presence in the text needs to be semantically noted, the `<abbr>` element is useful. This can be used, in turn, for
 *   styling or scripting purposes.
 *
 *  - You can use `<abbr>` in concert with `<dfn>` to establish definitions for terms which are abbreviations or acronyms.
 *
 * ## Accessibility Concerns
 *
 * Spelling out the acronym or abbreviation in full the first time it is used on a page is beneficial for helping people understand it,
 * especially if the content is technical or industry jargon.
 *
 *
 */
const Abbr = ({ children, css, ...props }: AbbrProps): ReactElement => {
  return (
    <motion.abbr {...props} css={emotionCss([css])}>
      {children}
    </motion.abbr>
  );
};
export default Abbr;
