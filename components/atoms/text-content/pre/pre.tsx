import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { PreProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
 *
 * The HTML `<pre>` element represents preformatted text which is to be presented exactly as written in the HTML file. The text
 * is typically rendered using a non-proportional ("monospace") font. Whitespace inside this element is displayed as written.
 *
 * ## Accessibility Concerns
 *
 * It is important to provide an alternate description for any images or diagrams created using preformatted text. The alternate
 * description should clearly and concisely describe the image or diagram's content.
 *
 * People experiencing low vision conditions and browsing with the aid of assistive technology such as a screen reader may not
 * understand what the preformatted text characters are representing when they are read out in sequence.
 *
 * A combination of the `<figure>` and `<figcaption>` elements, supplemented by a combination of an id and the ARIA role and
 * aria-labelledby attributes allow the preformatted text to be announced as an image, with the figcaption serving as the
 * image's alternate description.
 *
 * ```
 * <figure role="img" aria-labelledby="cow-caption">
 *   <pre>
 *   ___________________________
 * < I'm an expert in my field. >
 *   ---------------------------
 *          \   ^__^
 *           \  (oo)\_______
 *              (__)\       )\/\
 *                  ||----w |
 *                  ||     ||
 *   </pre>
 *   <figcaption id="cow-caption">
 *     A cow saying, "I'm an expert in my field." The cow is illustrated using preformatted text characters.
 *   </figcaption>
 * </figure>
 * ```
 *
 */
const Pre = ({ children, css, ...props }: PreProps): ReactElement => {
  return (
    <pre {...props} css={emotionCss([css])}>
      {children}
    </pre>
  );
};
export default Pre;
