import React, { ReactElement } from "react";
import { HeadingProps } from "../types";

const H2 = ({ children, ...props }: HeadingProps): ReactElement => {
  return <h2 {...props}>{children}</h2>;
};

export default H2;
