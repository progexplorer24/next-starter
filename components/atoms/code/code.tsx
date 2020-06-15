import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

export type CodeProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Code = ({ children, ...props }: CodeProps): ReactElement => {
  return <code {...props}>{children}</code>;
};

export default Code;
