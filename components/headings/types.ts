import { SerializedStyles } from "@emotion/core";
import { ReactNode } from "react";

export type HeadingProps = {
  css?: SerializedStyles;
  children: ReactNode;
};
