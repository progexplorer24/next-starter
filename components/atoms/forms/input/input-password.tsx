import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)
 *
 * `<input>` elements of type password provide a way for the user to securely enter a password.
 *
 * ## Usage Notes
 *
 * Password input boxes generally work just like other textual input boxes; the main difference is the obscuring of the content to prevent people
 * near the user from reading the password.
 *
 * ### Security
 *
 * Any forms involving sensitive information like passwords (e.g. login forms) should be served over HTTPS; Many browsers now implement
 * mechanisms to warn against insecure login forms; see Insecure passwords.
 *
 */
const InputPassword = ({
  placeholder = "Pass phrase",
  css,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <motion.input
      type="password"
      placeholder={placeholder}
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults, css])}
      {...props}
    />
  );
};

export default InputPassword;
