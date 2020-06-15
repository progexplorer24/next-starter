import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

type LineNumberProps = {
  children: number;
};

const LineNumber = ({ children }: LineNumberProps): ReactElement => {
  return (
    <span
      css={css`
        ${tw`inline-block w-8 pr-2 mr-2 -ml-2 text-right text-gray-700 border-r border-gray-700 select-none`}
      `}
    >
      {children}
    </span>
  );
};

export default LineNumber;
