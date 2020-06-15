import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

type TbodyProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Tbody = ({ children, ...props }: TbodyProps): ReactElement => {
  return <tbody {...props}>{children}</tbody>;
};

export default Tbody;
