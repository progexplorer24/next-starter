import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TdProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
 *
 *The HTML `<td>` element defines a cell of a table that contains data. It participates in the table model.
 *
 *
 */
const Td = ({ children, css, ...props }: TdProps): ReactElement => {
  return (
    <td css={emotionCss([tw`p-2`, css])} {...props}>
      {children}
    </td>
  );
};

export default Td;
