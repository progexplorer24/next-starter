import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

type H3Props = {
  css?: SerializedStyles;
  children: ReactNode;
};

const H3 = ({ children, ...props }: H3Props): ReactElement => {
  return <h3 {...props}>{children}</h3>;
};

export default H3;
