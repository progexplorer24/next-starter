import React, { FC } from "react";
import { HeadingProps } from "../types";

const H2: FC<HeadingProps> = ({ children, ...props }) => {
  return <h2 {...props}>{children}</h2>;
};

export default H2;
