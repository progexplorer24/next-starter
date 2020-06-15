import React, { ReactElement } from "react";
import { HeadingProps } from "../types";

const H6 = ({ children, ...props }: HeadingProps): ReactElement => {
  return <div {...props}>{children}</div>;
};

export default H6;
