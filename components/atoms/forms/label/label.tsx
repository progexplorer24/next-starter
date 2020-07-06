import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { LabelProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 *
 * The HTML `<label>` element represents a caption for an item in a user interface.
 *
 * ## Usage Notes
 *
 * Associating a `<label>` with an `<input>` element offers some major advantages:
 *
 * - The label text is not only visually associated with its corresponding text input; it is programmatically associated with it too. This means
 * that, for example, a screenreader will read out the label when the user is focused on the form input, making it easier for an assistive
 * technology user to understand what data should be entered.
 *
 * - You can click the associated label to focus/activate the input, as well as the input itself. This increased hit area provides an advantage
 *   to anyone trying to activate the input, including those using a touch-screen device.
 *
 * - One input can be associated with multiple labels.
 *
 * - When a <label> is clicked or tapped and it is associated with a form control, the resulting click event is also raised for the associated
 *   control.
 *
 * To associate the `<label>` with an `<input>` element, you need to give the `<input>` an id attribute. The <label> then needs a for attribute
 * whose value is the same as the input's id.
 *
 * Alternatively, you can nest the <input> directly inside the `<label>`, in which case the for and id attributes are not needed because the
 * association is implicit.
 *
 * ## Accessibility Concerns
 *
 * ### Interactive Content
 *
 * - Don't place interactive elements such as anchors or buttons inside a `label`. Doing so makes it difficult for people to activate the form
 *   input associated with the `label`.
 *
 * ### Headings
 *
 * Placing heading elements within a <label> interferes with many kinds of assistive technology, because headings are commonly used as a
 * navigation aid. If the label's text needs to be adjusted visually, use CSS classes applied to the <label> element instead.
 *
 * ### Buttons
 *
 * Buttons don't need labels.
 *
 */
const Label = ({ children, css, ...props }: LabelProps): ReactElement => {
  return (
    <label {...props} css={emotionCss([css])}>
      {children}
    </label>
  );
};
export default Label;
