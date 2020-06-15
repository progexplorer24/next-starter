import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

type LanguageLabelProps = {
  children?: string;
};

const LanguageLabel = ({ children = "" }: LanguageLabelProps): ReactElement => {
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

export default LanguageLabel;
