import React from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";

type ColorPillProps = {
  css?: SerializedStyles;
  className?: string;
  twClass?: TwStyle;
  color?: string;
  value?: string;
};

const ColorPill = ({
  twClass,
  color,
  value,
  css,
  ...props
}: ColorPillProps): JSX.Element => {
  return (
    <div
      css={emotionCss([
        tw`flex items-center justify-between h-10 px-3 mx-auto mt-2 bg-red-100 rounded-full w-50`,
        twClass,
        css,
      ])}
      {...props}
    >
      <div
        css={emotionCss([
          tw`text-xs font-bold tracking-wider text-black text-gray-900`,
        ])}
      >
        {value}
      </div>
      <div
        css={emotionCss([
          tw`text-xs font-bold tracking-wider text-black text-gray-900`,
        ])}
      >
        {color}
      </div>
    </div>
  );
};
export default ColorPill;
