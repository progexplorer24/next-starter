import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";

type H3Props = {
  css?: SerializedStyles;
  children: ReactNode;
};

const H3: FC<H3Props> = ({ children, ...props }) => {
  return <h3 {...props}>{children}</h3>;
};

export default H3;
