import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time)
 *
 * `<input>` elements of type **time** create input fields designed to let the user easily enter a time (hours and minutes, and optionally
 * seconds).
 *
 * ## Usage Notes
 *
 * **Although among the date and time input types time has the widest browser support, it is not yet approaching universal, so it is likely that
 * you'll need to provide an alternative method for entering the date and time, so that Safari users (and users of other non-supporting browsers)
 * can still easily enter time values.**
 *
 */
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
