import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Code from "@components/atoms/inline-text-semantics/code/code";
import type { CodeProps } from "@components/atoms/atom-types";

const InlineCode = ({ children, css, ...props }: CodeProps): ReactElement => {
  return (
    <Code
      css={emotionCss([tw`p-1 text-blue-700 bg-gray-200 rounded-sm`, css])}
      {...props}
    >
      {children}
    </Code>
  );
};

export default InlineCode;
