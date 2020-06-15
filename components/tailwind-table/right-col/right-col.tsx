import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import TD, { TDProps } from "@components/atoms/table/td/td";

const RightCol = ({ children, ...props }: TDProps): ReactElement => {
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
