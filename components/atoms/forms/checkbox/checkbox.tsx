import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import tw from "twin.macro";
import addFillColorToSvg from "@utils/add-fill-color-to-svg";
import { InputProps } from "@components/atoms/atom-types";

type CheckboxProps = Omit<InputProps, "name" | "id"> & {
  name: string;
  id: string;
  svg?: JSX.Element;
};

const svgIcon = (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z" />
  </svg>
);

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 *
 * `<input>` elements of type checkbox are rendered by default as boxes that are checked (ticked) when activated, like you might see in an
 * official government paper form.
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
const Checkbox = ({ svg = svgIcon, ...props }: CheckboxProps): ReactElement => {
  return (
    <motion.input
      type="checkbox"
      css={emotionCss`
        ${tw`inline-block text-blue-500 align-middle bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline `}
        color-adjust: exact;
        background-origin: border-box;
        user-select: none;
        flex-shrink: 0;
        height: 1em;
        width: 1em;

        &:checked {
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(${addFillColorToSvg(svg, `#FFFFFF`)});
        }
      `}
      {...props}
    />
  );
};

export default Checkbox;
