import React, { ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import NextLink from "@components/atoms/next-link/next-link";
import tw from "twin.macro";

type NavProps = {
  css?: SerializedStyles;
};

const Nav = ({ ...props }: NavProps): ReactElement => {
  return (
    <nav
      css={css`
        ${tw`flex justify-center h-10 space-x-4`}
      `}
      {...props}
    >
      <NextLink href="/atoms">Atoms</NextLink>
      <NextLink href="/design-tokens/font-size">Font Size</NextLink>
      <NextLink href="/design-tokens/font-weight">Font Weight</NextLink>
      <NextLink href="/all-mdx-components">MDX Components</NextLink>
    </nav>
  );
};

export default Nav;
