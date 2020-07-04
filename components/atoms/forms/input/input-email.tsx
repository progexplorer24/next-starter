import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
 *
 *  `<input>` elements of type email are used to let the user enter and edit an e-mail address, or, if the multiple attribute is specified, a
 * list of e-mail addresses.
 *
 * ## Usage Notes
 *
 * **It's important to remember that a user can tinker with your HTML behind the scenes, so your site must not use this validation for any
 * security purposes. You must verify the e-mail address on the server side of any transaction in which the provided text may have any security
 * implications of any kind.**
 *
 */
const InputEmail = ({
  placeholder = "Your name",
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <input
      type="email"
      placeholder={placeholder}
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults])}
      {...props}
    />
  );
};

export default InputEmail;
