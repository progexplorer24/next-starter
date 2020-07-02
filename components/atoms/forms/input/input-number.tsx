import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

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
