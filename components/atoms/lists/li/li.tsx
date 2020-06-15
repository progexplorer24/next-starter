import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type LiProps = {
  css?: SerializedStyles;
  children: ReactNode;
  listDecoration?: JSX.Element;
};

const Li = ({ children, listDecoration, ...props }: LiProps): ReactElement => {
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

export default Li;
