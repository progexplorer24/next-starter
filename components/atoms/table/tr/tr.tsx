import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type TrProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Tr = ({ children, ...props }: TrProps): ReactElement => {
  return (
    <tr
      css={css`
        ${tw`border-t border-b border-gray-400`}
      `}
      {...props}
    >
      {children}
    </tr>
  );
};

export default Tr;
