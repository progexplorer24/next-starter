import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H1Atom from "@components/atoms/headings/h1/h1";
import type { HeadingProps } from "@components/types";

const H1 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => (
  <H1Atom
    css={emotionCss([
      tw`mt-6 text-4xl font-light tracking-tight md:tracking-tighter md:text-5xl`,
      cssProp,
    ])}
    {...props}
  >
    {children}
  </H1Atom>
);

export default H1;
