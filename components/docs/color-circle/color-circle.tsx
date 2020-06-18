import React from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

type ColorCircleProps = {
  css?: SerializedStyles;
  className?: string;
};

const ColorCircle = ({ css, ...props }: ColorCircleProps): JSX.Element => {
  return (
    <div
      {...props}
      css={emotionCss([
        tw`mt-4 rounded-full shadow-inner w-14 h-14 sm:w-16 sm:h-16`,
        css,
      ])}
    />
  );
};
export default ColorCircle;
