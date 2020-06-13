import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

type BoardProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Board: FC<BoardProps> = ({ children, ...props }) => {
  return (
    <div
      css={css`
        ${tw`p-2 mt-6 bg-gray-100 border border-gray-400 rounded-lg shadow-lg`}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Board;
