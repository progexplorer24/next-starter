import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Code from "@components/code/code";
import Board from "./board/board";

type ShowcaseProps = {
  css?: SerializedStyles;
  className?: string;
  code: string;
  children?: ReactNode;
};

const Showcase = ({
  children,
  code,
  css,
  ...props
}: ShowcaseProps): ReactElement => {
  return (
    <div css={emotionCss([tw`mt-6`, css])} {...props}>
      <Board css={emotionCss([tw`mb-0 rounded-b-none`])}>{children}</Board>
      <Code
        css={emotionCss`
          ${tw`mt-0`}
        `}
        preCss={emotionCss`
          ${tw`rounded-t-none`}
        `}
        buttonCss={emotionCss`
          ${tw`rounded-tr-none`}
        `}
      >
        <pre className="language-tsx">{code}</pre>
      </Code>
    </div>
  );
};

export default Showcase;
