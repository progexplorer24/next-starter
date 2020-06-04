import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";

export type ParagraphProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const P: FC<ParagraphProps> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};

export default P;
