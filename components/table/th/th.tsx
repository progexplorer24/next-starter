import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type THProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TH: FC<THProps> = ({ children, ...props }) => {
  return (
    <th
      css={css`
        ${tw`p-2 text-sm font-bold text-gray-900 bg-gray-200`}
      `}
      {...props}
    >
      {children}
    </th>
  );
};

export default TH;
