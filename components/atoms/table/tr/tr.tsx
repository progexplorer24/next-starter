import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { TdProps } from "../td/td";
import { ThProps } from "../th/th";

export type TrProps = {
  css?: SerializedStyles;
  className?: string;
  children?:
    | ReactElement<
        TdProps | ThProps,
        (props: TdProps | ThProps) => ReactElement
      >
    | ReactElement<
        TdProps | ThProps,
        (props: TdProps | ThProps) => ReactElement
      >[];
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
