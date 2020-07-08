import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H2Atom from "@components/atoms/content-sectioning/h2/h2";
import type { H2Props } from "@components/atoms/atom-types";

const H2 = ({ children, css, ...props }: H2Props): ReactElement => (
  <H2Atom
    css={emotionCss([
      tw`mt-6 text-3xl font-light tracking-tight md:text-4xl`,
      css,
    ])}
    {...props}
  >
    {children}
  </H2Atom>
);

export default H2;
