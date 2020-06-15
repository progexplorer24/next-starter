import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H2Atom from "@components/atoms/headings/h2/h2";

const H2 = ({ children, ...props }: HeadingProps): ReactElement => (
  <H2Atom
    css={css`
      ${tw`mt-6 text-3xl font-light tracking-tight md:text-4xl`}
    `}
    {...props}
  >
    {children}
  </H2Atom>
);

export default H2;
