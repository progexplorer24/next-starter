import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type TDProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TD: FC<TDProps> = ({ children, ...props }) => {
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

export default TD;
