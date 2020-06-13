import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
import Code from "@components/code/code";
import Board from "./board/board";

type ShowcaseProps = {
  css?: SerializedStyles;
  code: string;
  children?: ReactNode;
};

const Showcase: FC<ShowcaseProps> = ({ children, code, ...props }) => {
  return (
    <div
      css={css`
        ${tw`mt-6`}
      `}
      {...props}
    >
      <Board
        css={css`
          ${tw`mb-0 rounded-b-none`}
        `}
      >
        {children}
      </Board>
      <Code
        css={css`
          ${tw`mt-0`}
        `}
        preCss={css`
          ${tw`rounded-t-none`}
        `}
        buttonCss={css`
          ${tw`rounded-tr-none`}
        `}
      >
        <pre className="language-tsx">{code}</pre>
      </Code>
    </div>
  );
};

export default Showcase;
