import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

type SpaceBlockProps = {
  css?: SerializedStyles;
  clasName?: string;
};

const SpaceBlock = ({ css, ...props }: SpaceBlockProps): ReactElement => {
  return <div css={emotionCss([tw`h-4 mt-6 bg-gray-400`, css])} {...props} />;
};

export default SpaceBlock;
