import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

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
