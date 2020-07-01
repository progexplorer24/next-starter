import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H3Atom from "@components/atoms/headings/h3/h3";
import type { HeadingProps } from "@components/atoms/atom-types";

const H2 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => (
  <H3Atom css={emotionCss([tw`mt-6 text-2xl md:text-3xl`, cssProp])} {...props}>
    {children}
  </H3Atom>
);

export default H2;
