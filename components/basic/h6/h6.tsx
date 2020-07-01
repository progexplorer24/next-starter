import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H6Atom from "@components/atoms/headings/h6/h6";
import type { HeadingProps } from "@components/atoms/atom-types";

const H2 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => (
  <H6Atom
    css={emotionCss([tw`mt-6 font-bold tracking-wider md:text-lg`, cssProp])}
    {...props}
  >
    {children}
  </H6Atom>
);

export default H2;
