import React, { FC } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H6Atom from "@components/atoms/headings/h6/h6";

const H2: FC<HeadingProps> = ({ children, ...props }) => (
  <H6Atom
    css={css`
      ${tw`mt-6 font-bold tracking-wider md:text-lg`}
    `}
    {...props}
  >
    {children}
  </H6Atom>
);

export default H2;
