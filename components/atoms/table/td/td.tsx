import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type TdProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Td = ({ children, ...props }: TdProps): ReactElement => {
  return (
    <td
      css={css`
        ${tw`p-2 text-sm font-semibold text-gray-700`}
      `}
      {...props}
    >
      {children}
    </td>
  );
};

export default Td;
