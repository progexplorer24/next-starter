import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
import TD from "@components/table/td/td";

type LeftColProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const LeftCol: FC<LeftColProps> = ({ children, ...props }) => {
  return (
    <TD
      css={css`
        ${tw`p-2 font-mono text-xs font-semibold text-indigo-700`}
      `}
      {...props}
    >
      {children}
    </TD>
  );
};

export default LeftCol;
