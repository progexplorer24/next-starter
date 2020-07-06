import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FigureProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
 *
 * The HTML `<figure>` (Figure With Optional Caption) element represents self-contained content, potentially with an optional
 * caption, which is specified using the (`<figcaption>`) element. The figure, its caption, and its contents are referenced as a
 * single unit.
 *
 * ## Usage Notes
 *
 * - Usually a `<figure>` is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a
 * document, but that can be moved to another part of the document or to an appendix without affecting the main flow.
 *
 * - Being a sectioning root, the outline of the content of the `<figure>` element is excluded from the main outline of the
 * document.
 *
 * - A caption can be associated with the `<figure>` element by inserting a `<figcaption>` inside it (as the first or the last
 * child. The first `<figcaption>` element found in the figure is presented as the figure's caption.
 *
 */
const Figure = ({ children, css, ...props }: FigureProps): ReactElement => {
  return (
    <figure {...props} css={emotionCss([css])}>
      {children}
    </figure>
  );
};
export default Figure;
