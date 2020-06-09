import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

type LanguageButtonProps = {
  children?: string;
};

const LanguageButton: React.FC<LanguageButtonProps> = ({ children = "" }) => {
  return (
    <span
      css={css`
        ${tw`absolute z-10 px-4 py-1 ml-10 font-mono text-sm font-bold tracking-wider text-white uppercase bg-blue-700 rounded rounded-t-none`};
      `}
    >
      {children}
    </span>
  );
};

export default LanguageButton;
