import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

type THeadProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const THead = ({ children, ...props }: THeadProps): ReactElement => {
  return <thead {...props}>{children}</thead>;
};

export default THead;
