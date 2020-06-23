import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

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
    <span
      css={emotionCss([tw`px-1 mr-2 font-semibold text-gray-600`, css])}
      {...props}
    >
      {children}.
    </span>
  );
};

export default Numeration;
