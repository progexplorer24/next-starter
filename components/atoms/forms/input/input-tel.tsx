import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)
 *
 * `<input>` elements of type **tel** are used to let the user enter and edit a telephone number. Unlike `<input type="email">` and `<input
 * type="url">` , the input value is not automatically validated to a particular format before the form can be submitted, because formats for telephone numbers vary so much around the world.
 *
 * ## Usage Notes
 *
 * One of the main advantages of <input type="tel"> is that it causes mobile browsers to display a special keyboard for entering phone numbers.
 *
 *
 */
const InputTel = ({
  placeholder = "Telephone Number",
  css,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <input
      type="tel"
      placeholder={placeholder}
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults, css])}
      {...props}
    />
  );
};

export default InputTel;
