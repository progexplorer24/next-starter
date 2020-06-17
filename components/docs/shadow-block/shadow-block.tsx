import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

type ShadowBlockProps = {
  css?: SerializedStyles;
  className?: string;
};

const ShadowBlock = ({ css, ...props }: ShadowBlockProps): ReactElement => {
  return (
    <div css={emotionCss([tw`w-24 h-24 mt-4 bg-white`, css])} {...props} />
  );
};
export default ShadowBlock;
