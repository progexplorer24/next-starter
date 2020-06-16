import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H3Atom from "@components/atoms/headings/h3/h3";

const H2 = ({ children, css, ...props }: HeadingProps): ReactElement => (
  <H3Atom css={emotionCss([tw`mt-6 text-2xl md:text-3xl`, css])} {...props}>
    {children}
  </H3Atom>
);

export default H2;
