import React, { FC } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

import H1Atom from "@components/atoms/headings/h1/h1";
import type { HeadingProps } from "@components/atoms/headings/types";

const H1: FC<HeadingProps> = ({ children, ...props }) => (
  <H1Atom
    css={css`
      ${tw`mt-6 text-4xl font-light tracking-tight md:tracking-tighter md:text-5xl`}
    `}
    {...props}
  >
    {children}
  </H1Atom>
);

export default H1;
