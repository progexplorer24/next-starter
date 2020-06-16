import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H2Atom from "@components/atoms/headings/h2/h2";

const H2 = ({ children, css, ...props }: HeadingProps): ReactElement => (
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
