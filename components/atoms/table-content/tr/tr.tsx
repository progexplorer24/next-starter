import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TrProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
 *
 * The HTML `<tr>` element defines a row of cells in a table. The row's cells can then be established using a mix of `<td>`
 * (data cell) and `<th>` (header cell) elements.
 *
 */
const Tr = ({ children, css, ...props }: TrProps): ReactElement => {
  return (
    <tr
      css={emotionCss([tw`border-t border-b border-gray-400`, css])}
      {...props}
    >
      {children}
    </tr>
  );
};

export default Tr;
