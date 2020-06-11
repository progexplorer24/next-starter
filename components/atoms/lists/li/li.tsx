import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type LIProps = {
  css?: SerializedStyles;
  children: ReactNode;
  listType?: JSX.Element;
};

const LI: FC<LIProps> = ({ children, listType, ...props }) => {
  return (
    <li
      {...props}
      css={css`
        ${tw`flex items-center pl-4 mt-2 text-lg font-thin tracking-wide`}
      `}
    >
      {typeof listType !== undefined ? listType : undefined}
      {children}
    </li>
  );
};

export default LI;
