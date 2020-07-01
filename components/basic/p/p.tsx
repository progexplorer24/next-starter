import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import PAtom from "@components/atoms/p/p";
import type { ParagraphProps } from "@components/atoms/atom-types";

const P = ({ children, cssProp, ...props }: ParagraphProps): ReactElement => {
  return (
    <PAtom
      css={emotionCss([tw`mt-4 leading-relaxed text-gray-700`, cssProp])}
      {...props}
    >
      {children}
    </PAtom>
  );
};

export default P;
