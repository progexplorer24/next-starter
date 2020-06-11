import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";

export type CodeProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Code: FC<CodeProps> = ({ children, ...props }) => {
  return <code {...props}>{children}</code>;
};

// const Code: FC<CodeProps> = ({ children, ...props }) => {
//   return (<code {...props}>{children}</code>)
// };

export default Code;
