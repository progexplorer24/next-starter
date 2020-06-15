import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type THProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TH = ({ children, ...props }: THProps): ReactElement => {
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
