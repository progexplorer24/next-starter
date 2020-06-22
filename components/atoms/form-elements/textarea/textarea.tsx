import React from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

type TextareaProps = {
  css?: SerializedStyles;
  className?: string;
  placeholder?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  placeholder = "Enter some long form content.",
  ...props
}) => {
  return (
    <textarea
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults])}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;
