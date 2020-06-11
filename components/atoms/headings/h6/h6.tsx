import React, { FC } from "react";
import { HeadingProps } from "../types";

const H6: FC<HeadingProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default H6;
