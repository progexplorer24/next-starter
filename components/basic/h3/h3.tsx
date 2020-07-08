import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H3Atom from "@components/atoms/content-sectioning/h3/h3";
import type { H3Props } from "@components/atoms/atom-types";

const H2 = ({ children, css, ...props }: H3Props): ReactElement => (
  <H3Atom css={emotionCss([tw`mt-6 text-2xl md:text-3xl`, css])} {...props}>
    {children}
  </H3Atom>
);

export default H2;
