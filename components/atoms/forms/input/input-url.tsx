import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

const InputUrl = ({
  placeholder = "Valid URL address",
  cssProp,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <input
      type="url"
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

export default InputUrl;
