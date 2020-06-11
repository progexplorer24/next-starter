import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
import NextLink from "@components/atoms/next-link/next-link";
import tw from "twin.macro";

type NavProps = {
  css?: SerializedStyles;
};

const Nav: FC<NavProps> = ({ ...props }) => {
  return (
    <nav
      css={css`
        ${tw`flex justify-center h-10 space-x-4`}
      `}
      {...props}
    >
      <NextLink href="/atoms">Atoms</NextLink>
      <NextLink href="/font-size">Font Size</NextLink>
      <NextLink href="/font-weight">Font Weight</NextLink>
      <NextLink href="/mdx-components">MDX Components</NextLink>
    </nav>
  );
};

export default Nav;
