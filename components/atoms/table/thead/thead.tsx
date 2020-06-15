import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

type TheadProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Thead = ({ children, ...props }: TheadProps): ReactElement => {
  return <thead {...props}>{children}</thead>;
};

export default Thead;
