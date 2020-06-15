import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

type TBodyProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TBody = ({ children, ...props }: TBodyProps): ReactElement => {
  return <tbody {...props}>{children}</tbody>;
};

export default TBody;
