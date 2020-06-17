import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

type BoardProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Board = ({ children, css, ...props }: BoardProps): ReactElement => {
  return (
    <div
      css={emotionCss([
        tw`p-4 mt-6 bg-gray-100 border border-gray-400 rounded-lg shadow-lg`,
        css,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};

export default Board;
