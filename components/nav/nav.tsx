import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import NextLink from "@components/atoms/next-link/next-link";
import tw from "twin.macro";

type NavProps = {
  css?: SerializedStyles;
  className?: string;
};

const Nav = ({ css, ...props }: NavProps): ReactElement => {
  return (
    <nav
      css={emotionCss([tw`flex justify-center h-10 space-x-4`, css])}
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
