import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)
 *
 * `<input>` elements of type **url** are used to let the user enter and edit a URL.
 *
 * ## Usage Notes
 *
 * When you create a URL input with the proper type value, url, you get automatic validation that the entered text is at least in the correct form
 * to potentially be a legitimate URL. This can help avoid cases in which the user mis-types their web site's address, or provides an invalid one.
 *
 * ### Security
 *
 * **It's also crucial to remember that a user can tinker with your HTML behind the scenes, so your site must not use this validation for any
 * security purposes. You must verify the URL on the server-side of any transaction in which the provided text may have any security implications
 * of any kind.**
 *
 */
const InputUrl = ({
  placeholder = "Valid URL address",
  css,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <input
      type="url"
      placeholder={placeholder}
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults, css])}
      {...props}
    />
  );
};

export default InputUrl;
