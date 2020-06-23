import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type LiProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
  listDecoration?: JSX.Element;
};

const Li = ({ children, css, ...props }: LiProps): ReactElement => {
  return (
    <li {...props} css={emotionCss([tw`list-none`, css])}>
      {children}
    </li>
  );
};

export default Li;
