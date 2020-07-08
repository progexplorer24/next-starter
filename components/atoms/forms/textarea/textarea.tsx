import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import { TextareaProps } from "@components/atoms/atom-types";
import { addBasicFormStyling, addPlaceholderFormDefaults } from "../styles";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 *
 * The HTML `<textarea>` element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable
 * amount of free-form text, for example a comment on a review or feedback form.
 *
 *
 * ## Usage Notes
 *
 * ### Placeholders
 *
 *  Placeholders should only be used to show an example of the type of data that should be entered into a form; they are not a substitute for a
 *  proper `<label>` element tied to the input.
 *
 * ### Styling with CSS
 *
 * `<textarea>` is a replaced element — it has intrinsic dimensions, like a raster image. By default, its display value is block. Compared to
 * other form elements it is relatively easy to style, with its box model, fonts, color scheme, etc. being easily manipulable using regular CSS.
 *
 * #### Baseline inconsistency
 *
 * The HTML specification doesn't define where the baseline of a `<textarea>` is, so different browsers set it to different positions. For Gecko,
 * the `<textarea>` baseline is set on the baseline of the first line of the textarea's first line, on another browser it may be set on the
 * bottom of the `<textarea>` box. Don't use vertical-align: baseline on it; the behavior is unpredictable.
 *
 */
const Textarea = ({
  placeholder = "Enter some long form content.",
  ...props
}: TextareaProps): ReactElement => {
  return (
    <motion.textarea
      css={emotionCss([addBasicFormStyling, addPlaceholderFormDefaults])}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;
