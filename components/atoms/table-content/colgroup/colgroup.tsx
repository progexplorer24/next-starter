import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ColgroupProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)
 *
 * The HTML `<colgroup>` element defines a group of columns within a table.
 *
 */
const Colgroup = ({ children, css, ...props }: ColgroupProps): ReactElement => {
  return (
    <colgroup {...props} css={emotionCss([css])}>
      {children}
    </colgroup>
  );
};
export default Colgroup;
