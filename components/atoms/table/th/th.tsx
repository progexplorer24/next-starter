import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type ThProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Th = ({ children, css, ...props }: ThProps): ReactElement => {
  return (
    <th css={emotionCss([tw`p-2`, css])} {...props}>
      {children}
    </th>
  );
};

export default Th;
