import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";

type THeadProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const THead: FC<THeadProps> = ({ children, ...props }) => {
  return <thead {...props}>{children}</thead>;
};

export default THead;
