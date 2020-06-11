import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

type CopyButtonProps = {
  handleClick: () => void;
};

const CopyButton: React.FC<CopyButtonProps> = ({ handleClick }) => {
  const positionButton = tw`absolute right-0 z-10 px-4 h-11`;

  return (
    <button
      onClick={handleClick}
      type="button"
      css={css`
        ${positionButton}
        ${tw`text-sm font-bold tracking-widest text-gray-100 bg-blue-700 rounded-tr-lg rounded-bl-lg hocus:bg-blue-600 hocus:text-white focus:outline-none`}
      `}
    >
      Copy
    </button>
  );
};

export default CopyButton;
