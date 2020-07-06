import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DialogProps } from "@components/atoms/atom-types";

/**
 * Warning: This HTML element is nohttps://caniuse.com/#search=dialogt well supported right now:
 * Support: 71.5 % DATE: 01.07.2020
 * See link: https://caniuse.com/#search=dialog
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 *
 * The HTML `<dialog>` element represents a dialog box or other interactive component, such as a dismissable alert, inspector,
 * or subwindow.
 *
 * ## Usage Notes
 *
 * The tabindex attribute must not be used on the `<dialog>` element.
 *
 * - <form> elements can close a dialog if they have the attribute `method="dialog"`. When such a form is submitted, the dialog
 *   closes with its returnValue property set to the value of the button that was used to submit the form.
 *
 * - The `::backdrop` CSS pseudo-element can be used to style behind a `<dialog>` element when the dialog is displayed with
 *   `HTMLDialogElement.showModal()`. For example, to dim unreachable content behind the modal dialog.
 *
 */

const Dialog = ({ children, css, ...props }: DialogProps): ReactElement => {
  return (
    <dialog {...props} css={emotionCss([css])}>
      {children}
    </dialog>
  );
};
export default Dialog;
