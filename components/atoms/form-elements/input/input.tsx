import React, { ReactElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

type InputProps = {
  css?: SerializedStyles;
  className?: string;
  placeholder?: string;
};

const Input = ({
  placeholder = "Your name",
  ...props
}: InputProps): ReactElement => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults])}
      {...props}
    />
  );
};

export default Input;
