import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DfnProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
 *
 * The HTML Definition element (`<dfn>`) is used to indicate the term being defined within the context of a definition phrase or sentence. The
 * `<p>` element, the `<dt>/<dd>` pairing, or the `<section>` element which is the nearest ancestor of the `<dfn>` is considered to be the
 * definition of the term.
 *
 * ## Usage Notes
 *
 * There are some not-entirely-obvious aspects to using the `<dfn>` element. We examine those here.
 *
 * ### Specifying the term being defined
 *
 * The term being defined is identified following these rules:
 *
 * 1. If the `<dfn>` element has a title attribute, the value of the title attribute is considered to be the term being defined. The element must
 *   still have text within it, but that text may be an abbreviation (perhaps using `<abbr>`) or another form of the term.
 *
 * 2. If the `<dfn>` contains a single child element and does not have any text content of its own, and the child element is an `<abbr>` element
 *  with a title attribute itself, then the exact value of the `<abbr>` element's title is the term being defined.
 *
 * 3. Otherwise, the text content of the `<dfn>` element is the term being defined. This is shown in the first example below.
 *
 * ### Links to `<dfn>` elements
 *
 * If you include an id attribute on the `<dfn>` element, you can then link to it using `<a>` elements. Such links should be uses of the term,
 * with the intent being that the reader can quickly navigate to the term's definition if they're not already aware of it, by clicking on the
 * term's link.
 *
 */
const Dfn = ({ children, cssProp, ...props }: DfnProps): ReactElement => {
  return (
    <dfn {...props} css={emotionCss([cssProp])}>
      {children}
    </dfn>
  );
};
export default Dfn;
