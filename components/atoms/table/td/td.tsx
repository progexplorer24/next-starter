import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type TdProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Td = ({ children, css, ...props }: TdProps): ReactElement => {
  return (
    <td css={emotionCss([tw`p-2`, css])} {...props}>
      {children}
    </td>
  );
};

export default Td;
