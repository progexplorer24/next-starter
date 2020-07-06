import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { ThProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
 *
 * The HTML `<th>` element defines a cell as header of a group of table cells. The exact nature of this group is defined by the
 * scope and headers attributes.
 */
const Th = ({ children, css, ...props }: ThProps): ReactElement => {
  return (
    <th css={emotionCss([tw`p-2`, css])} {...props}>
      {children}
    </th>
  );
};

export default Th;
