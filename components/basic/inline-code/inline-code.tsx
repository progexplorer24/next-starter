import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
import Code from "@components/atoms/code/code";

export type InlineCodeProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const InlineCode: FC<InlineCodeProps> = ({ children, ...props }) => {
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
