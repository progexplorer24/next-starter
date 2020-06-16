import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import Link from "next/link";
import A from "@components/atoms/a/a";

type NextLinkProps = {
  css?: SerializedStyles;
  className?: string;
  href: string;
  children: ReactNode;
};

const NextLink = ({
  children,
  href,
  css,
  ...props
}: NextLinkProps): ReactElement => {
  return (
    <Link href={href}>
      <A href={href} css={emotionCss([css])} {...props}>
        {children}
      </A>
    </Link>
  );
};

export default NextLink;
