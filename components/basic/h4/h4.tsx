import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H4Atom from "@components/atoms/content-sectioning/h4/h4";
import type { H4Props } from "@components/atoms/atom-types";

const H4 = ({ children, css, ...props }: H4Props): ReactElement => (
  <H4Atom
    css={emotionCss([
      tw`mt-6 text-xl font-semibold tracking-wide md:text-2xl`,
      css,
    ])}
    {...props}
  >
    {children}
  </H4Atom>
);

export default H4;
