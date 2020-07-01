import React from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { AProps } from "@components/types";

const A = React.forwardRef<HTMLAnchorElement, AProps>(
  ({ children, href, cssProp, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        css={emotionCss([tw`font-bold underline cursor-pointer`, cssProp])}
        {...props}
      >
        {children}
      </a>
    );
  }
);

export default A;
