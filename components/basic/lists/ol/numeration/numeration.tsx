import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Span from "@components/atoms/inline-text-semantics/span/span";

type NumerationProps = {
  css?: SerializedStyles;
  className?: string;
  children: number | string;
};

const Numeration = ({
  children,
  css,
  ...props
}: NumerationProps): ReactElement => {
  return (
    <Span
      css={emotionCss([tw`px-1 mr-2 font-semibold text-gray-700`, css])}
      {...props}
    >
      {children}.
    </Span>
  );
};

export default Numeration;
