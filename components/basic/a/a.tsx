import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AAtom, { AProps } from "@components/atoms/a/a";

const A = ({ children, href, css, ...props }: AProps): ReactElement => (
  <AAtom css={emotionCss([tw`text-blue-700`, css])} href={href} {...props}>
    {children}
  </AAtom>
);

export default A;
