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
