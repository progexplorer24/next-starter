import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

type NumerationProps = {
  css?: SerializedStyles;
  children: number;
};

const Numeration: FC<NumerationProps> = ({ children, ...props }) => {
  return (
    <span
      css={css`
        ${tw`px-1 mr-2 font-semibold text-gray-600`}
      `}
      {...props}
    >
      {children}.
    </span>
  );
};

export default Numeration;
