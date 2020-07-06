import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FigcaptionProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
 *
 * The HTML `<figcaption>` or Figure Caption element represents a caption or legend describing the rest of the contents of its
 * parent `<figure>` element.
 *
 */
const Figcaption = ({
  children,
  css,
  ...props
}: FigcaptionProps): ReactElement => {
  return (
    <figcaption {...props} css={emotionCss([css])}>
      {children}
    </figcaption>
  );
};
export default Figcaption;
