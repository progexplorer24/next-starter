import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";
import Link from "next/link";
import A from "@components/a/a";

type NextLinkProps = {
  css?: SerializedStyles;
  href: string;
  children: ReactNode;
};

const NextLink: FC<NextLinkProps> = ({ children, href, ...props }) => {
  return (
    <Link href={href}>
      <A href={href} {...props}>
        {children}
      </A>
    </Link>
  );
};

export default NextLink;
