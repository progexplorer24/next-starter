import React, { useState } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import copyToClipboard from "utils/copyt-to-clipboard";

type ColorBlockProps = {
  css?: SerializedStyles;
  className?: string;
  color: string;
};

const ColorBlock = ({ css, color, ...props }: ColorBlockProps): JSX.Element => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  const handleClick = async (): Promise<void> => {
    await copyToClipboard(color);
  };

  return (
    <button
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      css={emotionCss([tw`relative h-24 w-50 focus:outline-none`, css])}
      {...props}
    >
      <div
        css={emotionCss([
          tw`absolute top-0 right-0 px-2 py-1 text-xs font-bold tracking-wider text-white duration-500 ease-in-out bg-black`,
          emotionCss`
            ${isHover ? tw`opacity-100` : tw`opacity-0`}
          `,
        ])}
      >
        {color}
      </div>
    </button>
  );
};
export default ColorBlock;
