import React, { FC } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import TD, { TDProps } from "@components/atoms/table/td/td";

const LeftCol: FC<TDProps> = ({ children, ...props }) => {
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
