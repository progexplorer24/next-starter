import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import H5Atom from "@components/atoms/content-sectioning/h5/h5";
import type { H5Props } from "@components/atoms/atom-types";

const H2 = ({ children, css, ...props }: H5Props): ReactElement => (
  <H5Atom
    css={emotionCss([tw`mt-6 text-lg tracking-widest md:text-xl`, css])}
    {...props}
  >
    {children}
  </H5Atom>
);

export default H2;
