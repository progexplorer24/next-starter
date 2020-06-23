import React, { ReactElement, FunctionComponentElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { LiProps } from "../li/li";

export type UlProps = {
  css?: SerializedStyles;
  className?: string;
  icon?: ReactElement;
  children:
    | FunctionComponentElement<LiProps>
    | FunctionComponentElement<LiProps>[];
};

const Ul = ({ children, css, ...props }: UlProps): ReactElement => {
  return (
    <ul {...props} css={emotionCss([tw`mt-6`, css])}>
      {children}
    </ul>
  );
};
export default Ul;
