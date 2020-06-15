import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import Code, { CodeProps } from "@components/atoms/code/code";

const InlineCode = ({ children, ...props }: CodeProps): ReactElement => {
  return (
    <Code
      css={css`
        ${tw`p-1 text-blue-700 bg-gray-200 rounded-sm`}
      `}
      {...props}
    >
      {children}
    </Code>
  );
};

export default InlineCode;
