import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
 *
 * <input> elements of type email are used to let the user enter and edit an e-mail address, or, if the multiple attribute is specified, a list
 * of e-mail addresses.
 *
 * ## Usage Notes
 *
 * ### Input styling
 *
 * There are useful pseudo-classes available for styling form elements to help the user see when their values are valid or invalid. These are
 * `:valid` and `:invalid`.
 *
 * ### Required Values
 *
 * You can use the required attribute as an easy way of making entering a value required before form submission is allowed.
 *
 *
 *
 */
const InputText = ({
  placeholder = "Your name",
  css,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults, css])}
      {...props}
    />
  );
};

export default InputText;
