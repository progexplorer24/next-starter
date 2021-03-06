import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H6Atom from "@components/atoms/content-sectioning/h6/h6";
import type { H6Props } from "@components/atoms/atom-types";

const H2 = ({ children, css, ...props }: H6Props): ReactElement => (
  <H6Atom
    css={emotionCss([tw`mt-6 font-bold tracking-wider md:text-lg`, css])}
    {...props}
  >
    {children}
  </H6Atom>
);

export default H2;
