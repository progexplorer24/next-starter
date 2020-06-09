import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

type TRProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TR: FC<TRProps> = ({ children, ...props }) => {
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

export default TR;
