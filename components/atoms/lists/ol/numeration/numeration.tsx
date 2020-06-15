import React, { ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

type NumerationProps = {
  css?: SerializedStyles;
  children: number;
};

const Numeration = ({ children, ...props }: NumerationProps): ReactElement => {
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
