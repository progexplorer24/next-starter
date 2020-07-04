import React, { ReactElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";
import addFillColorToSvg from "@utils/add-fill-color-to-svg";

type RadioButtonProps = {
  name: string;
  id: string;
  css?: SerializedStyles;
  className?: string;
};

const svg = (
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
 * When you create a URL input with the proper type value, url, you get automatic validation that the entered text is at least in the correct form
 * to potentially be a legitimate URL. This can help avoid cases in which the user mis-types their web site's address, or provides an invalid one.
 *
 * ### Security
 *
 * **It's also crucial to remember that a user can tinker with your HTML behind the scenes, so your site must not use this validation for any
 * security purposes. You must verify the URL on the server-side of any transaction in which the provided text may have any security implications
 * of any kind.**
 *
 */
const RadioButton = (props: RadioButtonProps): ReactElement => {
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
