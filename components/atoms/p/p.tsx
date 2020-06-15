import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

export type ParagraphProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const P = ({ children, ...props }: ParagraphProps): ReactElement => {
  return <p {...props}>{children}</p>;
};

export default P;
