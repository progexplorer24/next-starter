import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import { HeadingProps } from "@components/atoms/headings/types";
import H5Atom from "@components/atoms/headings/h5/h5";

const H2 = ({ children, ...props }: HeadingProps): ReactElement => (
  <H5Atom
    css={css`
      ${tw`mt-6 text-lg tracking-widest md:text-xl`}
    `}
    {...props}
  >
    {children}
  </H5Atom>
);

export default H2;
