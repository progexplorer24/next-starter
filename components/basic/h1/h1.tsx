import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H1Atom from "@components/atoms/content-sectioning/h1/h1";
import type { H1Props } from "@components/atoms/atom-types";

const H1 = ({ children, css, ...props }: H1Props): ReactElement => (
  <H1Atom
    css={emotionCss([
      tw`mt-6 text-4xl font-light tracking-tight md:tracking-tighter md:text-5xl`,
      css,
    ])}
    {...props}
  >
    {children}
  </H1Atom>
);

export default H1;
