import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import Td, { TdProps } from "@components/atoms/table/td/td";

const RightCol = ({ children, ...props }: TdProps): ReactElement => {
  return (
    <Td
      css={css`
        ${tw`p-2 font-mono text-xs text-purple-600`}
      `}
      {...props}
    >
      {children}
    </Td>
  );
};

export default RightCol;
