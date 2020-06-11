import React, { FC } from "react";
import { HeadingProps } from "../types";

const H4: FC<HeadingProps> = ({ children, ...props }) => {
  return <h4 {...props}>{children}</h4>;
};

export default H4;
