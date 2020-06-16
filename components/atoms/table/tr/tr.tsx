import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type TrProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Tr = ({ children, css, ...props }: TrProps): ReactElement => {
  return (
    <tr
      css={emotionCss([tw`border-t border-b border-gray-400`, css])}
      {...props}
    >
      {children}
    </tr>
  );
};

export default Tr;
