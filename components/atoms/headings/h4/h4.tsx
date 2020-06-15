import React, { ReactElement } from "react";
import { HeadingProps } from "../types";

const H4 = ({ children, ...props }: HeadingProps): ReactElement => {
  return <h4 {...props}>{children}</h4>;
};

export default H4;
