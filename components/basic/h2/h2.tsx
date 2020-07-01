import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H2Atom from "@components/atoms/headings/h2/h2";
import type { HeadingProps } from "@components/types";

const H2 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => (
  <H2Atom
    css={emotionCss([
      tw`mt-6 text-3xl font-light tracking-tight md:text-4xl`,
      cssProp,
    ])}
    {...props}
  >
    {children}
  </H2Atom>
);

export default H2;
