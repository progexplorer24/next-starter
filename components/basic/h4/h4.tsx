import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H4Atom from "@components/atoms/content-sectioning/h4/h4";
import type { HeadingProps } from "@components/atoms/atom-types";

const H2 = ({ children, cssProp, ...props }: HeadingProps): ReactElement => (
  <H4Atom
    css={emotionCss([
      tw`mt-6 text-xl font-semibold tracking-wide md:text-2xl`,
      cssProp,
    ])}
    {...props}
  >
    {children}
  </H4Atom>
);

export default H2;
