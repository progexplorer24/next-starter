import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ColProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)
 *
 * The HTML `<col>` element defines a column within a table and is used for defining common semantics on all common cells. It is
 * generally found within a `<colgroup>` element.
 *
 */
const Col = ({ css, ...props }: ColProps): ReactElement => {
  return <col {...props} css={emotionCss([css])} />;
};
export default Col;
