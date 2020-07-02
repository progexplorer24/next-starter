import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

const InputTime = ({
  placeholder = "Time Input",
  cssProp,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return (
    <input
      type="time"
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

export default InputTime;
