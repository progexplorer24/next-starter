import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Code, { CodeProps } from "@components/atoms/code/code";

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
