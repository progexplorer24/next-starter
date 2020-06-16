import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H6Atom from "@components/atoms/headings/h6/h6";

const H2 = ({ children, css, ...props }: HeadingProps): ReactElement => (
  <H6Atom
    css={emotionCss([tw`mt-6 font-bold tracking-wider md:text-lg`, css])}
    {...props}
  >
    {children}
  </H6Atom>
);

export default H2;
