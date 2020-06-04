import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";

type TDProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TD: FC<TDProps> = ({ children, ...props }) => {
  return <td {...props}>{children}</td>;
};

export default TD;
