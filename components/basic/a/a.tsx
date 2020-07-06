import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AAtom from "@components/atoms/inline-text-semantics/a/a";
import type { AProps } from "@components/atoms/atom-types";

const A = ({ children, href = "#", css, ...props }: AProps): ReactElement => (
  <AAtom css={emotionCss([tw`text-blue-700`, css])} href={href} {...props}>
    {children}
  </AAtom>
);

export default A;
