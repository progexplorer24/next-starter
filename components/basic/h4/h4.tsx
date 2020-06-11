import React, { FC } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H4Atom from "@components/atoms/headings/h4/h4";

const H2: FC<HeadingProps> = ({ children, ...props }) => (
  <H4Atom
    css={css`
      ${tw`mt-6 text-xl font-semibold tracking-wide md:text-2xl`}
    `}
    {...props}
  >
    {children}
  </H4Atom>
);

export default H2;
