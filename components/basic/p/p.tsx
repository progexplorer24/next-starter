import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import PAtom from "@components/atoms/text-content/p/p";
import type { ParagraphProps } from "@components/atoms/atom-types";

const P = ({ children, css, ...props }: ParagraphProps): ReactElement => {
  return (
    <PAtom
      css={emotionCss([tw`mt-4 leading-relaxed text-gray-700`, css])}
      {...props}
    >
      {children}
    </PAtom>
  );
};

export default P;
