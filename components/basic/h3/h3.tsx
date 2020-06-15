import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H3Atom from "@components/atoms/headings/h3/h3";

const H2 = ({ children, ...props }: HeadingProps): ReactElement => (
  <H3Atom
    css={css`
      ${tw`mt-6 text-2xl md:text-3xl`}
    `}
    {...props}
  >
    {children}
  </H3Atom>
);

export default H2;
