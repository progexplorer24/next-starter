import React, { FC } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import AAtom, { AProps } from "@components/atoms/a/a";

const A: FC<AProps> = ({ children, href, ...props }) => (
  <AAtom
    css={css`
      ${tw`text-blue-700`}
    `}
    href={href}
    {...props}
  >
    {children}
  </AAtom>
);

export default A;
