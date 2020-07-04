import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
 *
 * `<input>` elements of type number are used to let the user enter a number. They include built-in validation to reject non-numerical entries.
 *
 *
 * ## Usage Notes
 *
 * Mobile browsers further help with the user experience by showing a special keyboard more suited for entering numbers when the user tries to
 * enter a value.
 *
 * ### Security
 *
 * It's crucial to remember that a user can tinker with your HTML behind the scenes, so your site must not use simple client-side validation for
 * any security purposes. You must verify on the server side any transaction in which the provided value may have any security implications of
 * any kind.
 *
 * ### Validation
 *
 * - `<input type="number">` elements automatically invalidate any entry that isn't a number (or empty, unless required is specified).
 * - You can use the required attribute to make an empty entry invalid. (In other words, the input must be filled in.)
 * - You can use the step attribute to constrain valid values to a certain set of steps (e.g., multiples of 10).
 * - You can use the min and max attributes to constrain valid values to lower and upper bounds.
 *
 */
const InputNumber = ({
  placeholder = "Type a number here",
  cssProp,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      css={emotionCss([
        addBasicFormStyling,
        addPlaceholderFormDefaults,
        cssProp,
      ])}
      {...props}
    />
  );
};

export default InputNumber;
