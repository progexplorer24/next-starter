import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";
import Link from "next/link";
import A from "@components/atoms/a/a";

type NextLinkProps = {
  css?: SerializedStyles;
  href: string;
  children: ReactNode;
};

const NextLink = ({
  children,
  href,
  ...props
}: NextLinkProps): ReactElement => {
  return (
    <Link href={href}>
      <A href={href} {...props}>
        {children}
      </A>
    </Link>
  );
};

export default NextLink;
