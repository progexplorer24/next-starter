import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { OptionProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 *
 * The HTML `<option>` element is used to define an item contained in a `<select>`, an `<optgroup>`, or a `<datalist>` element. As such,
 * `<option>` can represent menu items in popups and other lists of items in an HTML document.
 *
 */
const Option = ({ children, cssProp, ...props }: OptionProps): ReactElement => {
  return (
    <option {...props} css={emotionCss([cssProp])}>
      {children}
    </option>
  );
};
export default Option;
