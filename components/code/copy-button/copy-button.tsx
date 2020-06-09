import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

type CopyButtonProps = {
  handleClick: () => void;
};

const CopyButton: React.FC<CopyButtonProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      css={css`
        ${tw`absolute right-0 z-10 px-4 pt-2 pb-5 text-xs font-semibold text-gray-500 rounded-lg hover:text-gray-200 focus:outline-none focus:text-gray-200`}
      `}
    >
      Copy
    </button>
  );
};

export default CopyButton;
