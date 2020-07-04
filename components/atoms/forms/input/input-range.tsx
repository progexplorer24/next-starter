import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
 *
 * `<input>` elements of type range let the user specify a numeric value which must be no less than a given value, and no more than another given
 * value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a
 * text entry box like the number input type. Because this kind of widget is imprecise, it shouldn't typically be used unless the control's exact
 * value isn't important.
 *
 * ## Usage Notes
 *
 * The `range` input type lets you ask the user for a value in cases where the user may not even care—or know—what the specific numeric value
 * selected is.
 *
 * A few examples of situations in which range inputs are commonly used:
 *
 * - Audio controls such as volume and balance, or filter controls.
 * -Color configuration controls such as color channels, transparency, brightness, etc.
 * -Game configuration controls such as difficulty, visibility distance, world size, and so forth.
 * -Password length for a password manager's generated passwords.
 *
 * As a rule, if the user is more likely to be interested in the percentage of the distance between minimum and maximum values than the actual
 * number itself, a range input is a great candidate. For example, in the case of a home stereo volume control, users typically think "set volume
 * at halfway to maximum" instead of "set volume to 0.5".
 *
 *
 */
const InputRange = ({
  cssProp,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return <input type="range" css={emotionCss([cssProp])} {...props} />;
};

export default InputRange;
