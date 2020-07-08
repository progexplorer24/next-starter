import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { FieldsetProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
 *
 * The HTML `<fieldset>` element is used to group several controls as well as labels (`<label>`) within a web form.
 *
 * ## Usage Notes
 *
 * ### Form Attribute
 *
 * Form attribute can contain `id` of a `<form>` on the same page, allowing you to make the `<fieldset>` part of that `<form>` even if it is not
 * nested inside it, and disabled, which allows you to disable the `<fieldset>` and all its contents in one go.
 *
 * ### Styling Issues
 *
 * #### Bug!
 *
 * **As of this writing, there are bugs in Microsoft Edge and Google Chrome which prevent flexbox and grid layouts from being used inside a
 * `<fieldset>`.**
 *
 * #### Solutions
 *
 * [Stackoverflow Solutions](https://stackoverflow.com/questions/28078681/why-cant-fieldset-be-flex-containers/46085387#46085387)
 *
 * **Example Solution:**
 *
 * ```
 * <fieldset aria-labelledby="fake-legend">
 *  <div class="grid">
 *   <div class="fake-legend" id="fake-legend">I am as good accessibilty wise as a real legend</div>
 *
 * 		<label>
 *       <input type="checkbox" name="checkbox-example"/>
 * 			 <span>I am a checkbox</span>
 *    </label>
 *
 * 		<label>
 *       <input type="checkbox" name="checkbox-example"/>
 * 			 <span>I am a checkbox</span>
 *    </label>
 *
 * 		<label>
 *       <input type="checkbox" name="checkbox-example"/>
 * 			 <span>I am a checkbox</span>
 *     </label>
 *   </div>
 * </fieldset>
 * ```
 *
 *
 * There are several special styling considerations for `<fieldset>`.
 *
 * Its `display` value is `block` by default, and it establishes a block formatting context. If the `<fieldset>` is styled with an inline-level `
 * display` value, it will behave as `inline-block`, otherwise it will behave as `block`. By default there is a `2px` `groove` border surrounding
 * the contents, and a small amount of default padding. The element has `min-inline-size: min-content` by default.
 *
 * If a `<legend>` is present, it is placed over the `block-start` border. The `<legend>` shrink-wraps, and also establishes a formatting
 * context. The `display` value is blockified. (For example, `display: inline` behaves as block.)
 *
 * There will be an anonymous box holding the contents of the `<fieldset>`, which inherits certain properties from the `<fieldset>`. If the
 * `<fieldset>` is styled with `display: grid` or `display: inline-grid`, then the anonymous box will be a grid formatting context. If the
 * `<fieldset>` is styled with `display: flex` or `display: inline-flex`, then the anonymous box will be a flex formatting context. Otherwise, it
 * establishes a block formatting context.
 *
 * You can feel free to style the <fieldset> and <legend> in any way you want to suit your page design.
 *
 *
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
const FieldSet = ({
  children,
  css,
  ariaLegend,
  ...props
}: FieldsetProps): ReactElement => {
  return (
    <motion.fieldset
      {...props}
      aria-labelledby={ariaLegend}
      css={emotionCss([css])}
    >
      {children}
    </motion.fieldset>
  );
};
export default FieldSet;
