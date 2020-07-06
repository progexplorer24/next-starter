import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DtProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
 *
 * The HTML `<dt>` element specifies a term in a description or definition list, and as such must be used inside a `<dl>`
 * element. It is usually followed by a `<dd>` element; however, multiple `<dt>` elements in a row indicate several terms that
 * are all defined by the immediate next `<dd>` element.
 *
 */
const Dt = ({ children, css, ...props }: DtProps): ReactElement => {
  return (
    <dt {...props} css={emotionCss([css])}>
      {children}
    </dt>
  );
};
export default Dt;
