import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AAtom from "@components/atoms/a/a";
import type { AProps } from "@components/atoms/atom-types";

const A = ({
  children,
  href = "#",
  cssProp,
  ...props
}: AProps): ReactElement => (
  <AAtom css={emotionCss([tw`text-blue-700`, cssProp])} href={href} {...props}>
    {children}
  </AAtom>
);

export default A;
