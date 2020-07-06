import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomLi from "@components/atoms/text-content/li/li";
import type { LiProps } from "@components/atoms/atom-types";

const Li = ({
  children,
  listDecoration,
  css,
  ...props
}: LiProps): ReactElement => {
  return (
    <AtomLi
      {...props}
      css={emotionCss([tw`mt-2 text-lg font-thin text-gray-700`, css])}
    >
      {typeof listDecoration !== undefined ? listDecoration : undefined}
      {children}
    </AtomLi>
  );
};

// ReactElement < LiProps, JSXElementConstructor < LiProps >>

export default Li;
