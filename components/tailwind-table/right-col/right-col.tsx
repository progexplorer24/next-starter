import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
import TD from "@components/table/td/td";

type RightColProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const RightCol: FC<RightColProps> = ({ children, ...props }) => {
  return (
    <TD
      css={css`
        ${tw`p-2 font-mono text-xs text-purple-600`}
      `}
      {...props}
    >
      {children}
    </TD>
  );
};

export default RightCol;
