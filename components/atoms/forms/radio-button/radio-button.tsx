import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import addFillColorToSvg from "@utils/add-fill-color-to-svg";
import type { InputProps } from "@components/atoms/atom-types";

type RadioButtonProps = Omit<InputProps, "id" | "name"> & {
  name: string;
  id: string;
  svg?: JSX.Element;
};

const svgIcon = (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="3" />
  </svg>
);

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
 *
 * `<input>` elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options. Only one
 * radio button in a given group can be selected at the same time.
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
const RadioButton = ({
  svg = svgIcon,
  ...props
}: RadioButtonProps): ReactElement => {
  const radioCheckedStyles = emotionCss`&:checked {
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(${addFillColorToSvg(svg, "#FFFFFF")});
        }`;
  return (
    <input
      type="radio"
      css={emotionCss([
        tw`inline-block text-blue-500 align-middle bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:shadow-outline`,
        emotionCss`color-adjust: exact;
        background-origin: border-box;
        user-select: none;
        flex-shrink: 0;
        height: 1em;
        width: 1em;`,
        radioCheckedStyles,
      ])}
      {...props}
    />
  );
};

export default RadioButton;
