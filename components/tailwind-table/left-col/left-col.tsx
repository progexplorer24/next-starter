import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import Td, { TdProps } from "@components/atoms/table/td/td";

const LeftCol = ({ children, ...props }: TdProps): ReactElement => {
  return (
    <Td
      css={css`
        ${tw`p-2 font-mono text-xs font-semibold text-indigo-700`}
      `}
      {...props}
    >
      {children}
    </Td>
  );
};

export default LeftCol;
