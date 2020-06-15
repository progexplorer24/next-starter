import React, { ReactElement } from "react";

import type { HeadingProps } from "../types";

const H1 = ({ children, ...props }: HeadingProps): ReactElement => {
  return <h1 {...props}>{children}</h1>;
};

export default H1;
