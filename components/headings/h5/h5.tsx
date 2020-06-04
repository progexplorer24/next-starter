import React, { FC } from "react";
import { HeadingProps } from "../types";

const H5: FC<HeadingProps> = ({ children, ...props }) => {
  return <h5 {...props}>{children}</h5>;
};

export default H5;
