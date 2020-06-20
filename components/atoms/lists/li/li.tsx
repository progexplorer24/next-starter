import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type LiProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
  listDecoration?: JSX.Element;
};

const Li = ({
  children,
  listDecoration,
  css,
  ...props
}: LiProps): ReactElement => {
  return (
    <li
      {...props}
      css={emotionCss([
        tw`mt-2 text-lg font-thin text-gray-700 list-none `,
        css,
      ])}
    >
      {typeof listDecoration !== undefined ? listDecoration : undefined}
      {children}
    </li>
  );
};

export default Li;
