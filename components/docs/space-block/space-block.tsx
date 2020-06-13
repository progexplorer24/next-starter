import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

type SpaceBlockProps = {
  css?: SerializedStyles;
};

const SpaceBlock: FC<SpaceBlockProps> = ({ children, ...props }) => {
  return (
    <div
      css={css`
        ${tw`h-4 mt-6 bg-gray-400`}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default SpaceBlock;
