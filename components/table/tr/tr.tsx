import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";

type TRProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TR: FC<TRProps> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

export default TR;
