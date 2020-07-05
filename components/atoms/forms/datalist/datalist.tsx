import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DatalistProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
 *
 * ## Warning
 *
 * There are problems with support for older browsers:
 * See: [Datalist Support](https://caniuse.com/#search=datalist)
 * If you need better support for older browsers use [datalist polyfill](https://github.com/mfranzke/datalist-polyfill)
 *
 * The HTML `<datalist>` element contains a set of `<option>` elements that represent the permissible or recommended options available to choose
 * from within other controls.
 *
 * ## Usage Notes
 *
 * ## Accessibility Concerns
 *
 * ### Providing a bigger hit area for your checkboxes
 *
 * You can toggle a checkbox by clicking on its associated `<label>` element as well as on the checkbox itself. This is a really useful feature
 * of HTML form labels that makes it easier to click the option you want, especially on small-screen devices like smartphones.
 *
 * Beyond accessibility, this is another good reason to properly set up `<label>` elements on your forms.
 *
 */
const Datalist = ({
  children,
  cssProp,
  ...props
}: DatalistProps): ReactElement => {
  return (
    <datalist {...props} css={emotionCss([cssProp])}>
      {children}
    </datalist>
  );
};
export default Datalist;
