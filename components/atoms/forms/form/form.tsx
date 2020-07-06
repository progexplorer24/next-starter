import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FormProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
 *
 * The HTML `<form>` element represents a document section containing interactive controls for submitting information.
 *
 * ## Usage Notes
 *
 * It is possible to use the `:valid` and `:invalid` CSS pseudo-classes to style a `<form>` element based on whether or not the elements inside
 * the form are valid.
 *
 */
const Form = ({ children, css, ...props }: FormProps): ReactElement => {
  return (
    <form {...props} css={emotionCss([css])}>
      {children}
    </form>
  );
};
export default Form;
