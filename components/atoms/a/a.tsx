import React, { ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type AProps = {
  css?: SerializedStyles;
  href: string;
  children: ReactNode;
};

const A = React.forwardRef<HTMLAnchorElement, AProps>(
  ({ children, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        css={css`
          ${tw`font-bold underline cursor-pointer`}
        `}
        {...props}
      >
        {children}
      </a>
    );
  }
);

export default A;
