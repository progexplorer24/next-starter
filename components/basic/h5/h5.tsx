import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H5Atom from "@components/atoms/headings/h5/h5";
import type { HeadingProps } from "@components/types";

const H2 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => (
  <H5Atom
    css={emotionCss([tw`mt-6 text-lg tracking-widest md:text-xl`, cssProp])}
    {...props}
  >
    {children}
  </H5Atom>
);

export default H2;
