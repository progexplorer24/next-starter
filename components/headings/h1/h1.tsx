import React, { FC } from "react";

import type { HeadingProps } from "../types";

const H1: FC<HeadingProps> = ({ children, ...props }) => {
  return <h1 {...props}>{children}</h1>;
};

export default H1;
