import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import PAtom, { ParagraphProps } from "@components/atoms/p/p";

const P = ({ children, ...props }: ParagraphProps): ReactElement => {
  return (
    <PAtom
      css={css`
        ${tw`mt-4 leading-relaxed text-gray-700`}
      `}
      {...props}
    >
      {children}
    </PAtom>
  );
};

export default P;
