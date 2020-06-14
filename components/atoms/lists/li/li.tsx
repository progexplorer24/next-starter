import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type LIProps = {
  css?: SerializedStyles;
  children: ReactNode;
  listDecoration?: JSX.Element;
};

const LI: FC<LIProps> = ({ children, listDecoration, ...props }) => {
  return (
    <li
      {...props}
      css={css`
        ${tw`flex items-center mt-2 text-lg font-thin tracking-wide`}
      `}
    >
      {typeof listDecoration !== undefined ? listDecoration : undefined}
      {children}
    </li>
  );
};

export default LI;
