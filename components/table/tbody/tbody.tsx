import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";

type TBodyProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TBody: FC<TBodyProps> = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};

export default TBody;
