import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { motion } from "framer-motion";
import type { SelectProps } from "@components/atoms/atom-types";
import emotionClone from "@utils/emotion-clone";
import Span from "@components/atoms/inline-text-semantics/span/span";
import { addBasicFormStyling } from "../styles";
import ArrowIcon from "./arrow.svg";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 *
 * TODO: Add custom select element that is fully customizable and accessible. Select element doesn't provide good DX experiance.
 * [Custom Select](https://andrejgajdos.com/custom-select-dropdown/)
 * [Examples](https://speckyboy.com/open-source-css-javascript-select-box-snippets/)
 *
 * The HTML `<select>` element represents a control that provides a menu of options.
 *
 * ### Customization
 *
 * `multiple` attribute is disabled because it doesn't provide good user experiance. You should consider a better alternative for selecting
 *  multiple elements.
 *
 * ## Usage Notes
 *
 * - Each `<option>` element should have a value attribute containing the data value to submit to the server when that option is selected. If no
 * value attribute is included, the value defaults to the text contained inside the element. You can include a selected attribute on an `
 * <option>` element to make it selected by default when the page first loads.
 *
 * - The `<select>` element has some unique attributes you can use to control it, such as multiple to specify whether multiple options can be
 *  selected, and size to specify how many options should be shown at once. It also accepts most of the general form input attributes such as
 *  required, disabled, autofocus, etc.
 *
 * - You can further nest `<option>` elements inside `<optgroup>` elements to create separate groups of options inside the dropdown.
 *
 * ### Styling with CSS
 *
 * The `<select>` element is notoriously difficult to style productively with CSS. You can affect certain aspects like any element — for example,
 * manipulating the box model, the displayed font, etc., and you can use the appearance property to remove the default system appearance.
 *
 * However, these properties don't produce a consistent result across browsers, and it is hard to do things like line different types of form
 * element up with one another in a column. The `<select>` element's internal structure is complex, and hard to control. If you want to get full
 * control, you should consider using a library with good facilities for styling form widgets, or try rolling your own dropdown menu using
 * non-semantic elements, JavaScript, and WAI-ARIA to provide semantics.
 *
 */
const Select = ({
  id,
  name,
  children,
  icon = <ArrowIcon />,
  ...props
}: SelectProps): ReactElement => {
  const iconWithStyles = emotionClone(icon, {
    ...icon.props,
    css: emotionCss([
      tw`absolute top-0 right-0 w-6 h-6 mr-2 text-gray-500 pointer-events-none fill-current`,
    ]),
  });

  return (
    <Span css={emotionCss([tw`relative`])}>
      <motion.select
        name={name}
        id={id}
        {...props}
        css={emotionCss([addBasicFormStyling])}
      >
        {children}
      </motion.select>
      {iconWithStyles}
    </Span>
  );
};

export default Select;
