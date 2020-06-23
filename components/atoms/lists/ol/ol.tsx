import React, { ReactElement, FunctionComponentElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { LiProps } from "../li/li";

export type OlProps = {
  css?: SerializedStyles;
  className?: string;
  children:
    | FunctionComponentElement<LiProps>
    | FunctionComponentElement<LiProps>[];
};

const Ol = ({ children, css, ...props }: OlProps): ReactElement => {
  return (
    <ol css={emotionCss([tw`mt-6`, css])} {...props}>
      {children}
    </ol>
  );
};

export default Ol;
