import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type AProps = {
  css?: SerializedStyles;
  href: string;
  children: ReactNode;
};

const A: FC<AProps> = ({ children, href, ...props }) => {
  return (
    <a
      href={href}
      css={css`
        ${tw`font-bold underline`}
      `}
      {...props}
    >
      {children}
    </a>
  );
};

export default A;
