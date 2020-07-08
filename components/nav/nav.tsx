import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Link from "next/link";
import A from "@components/atoms/inline-text-semantics/a/a";

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
      <Link href="components/alert" passHref>
        <A>Alert</A>
      </Link>
      <Link href="/atoms" passHref>
        <A>Atoms</A>
      </Link>
      <Link href="/design-tokens/font-size" passHref>
        <A>Font Size</A>
      </Link>
      <Link href="/design-tokens/font-weight" passHref>
        <A>Font Weight</A>
      </Link>
      <Link href="/mdx-components" passHref>
        <A>MDX Components</A>
      </Link>
    </nav>
  );
};

export default Nav;
