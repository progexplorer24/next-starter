import React, { ReactElement } from "react";

import { css as emotionCss, SerializedStyles } from "@emotion/core";

import tw from "twin.macro";
import addFillColorToSvg from "@utils/add-fill-color-to-svg";

type CheckboxProps = {
  name: string;
  id: string;
  css?: SerializedStyles;
  className?: string;
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
 * ## Usage Notes
 *
 *
 */
const Checkbox = ({ svg = svgIcon, ...props }: CheckboxProps): ReactElement => {
  return (
    <input
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
