import React, { ReactElement } from "react";
import { HeadingProps } from "../types";

const H5 = ({ children, ...props }: HeadingProps): ReactElement => {
  return <h5 {...props}>{children}</h5>;
};

export default H5;
