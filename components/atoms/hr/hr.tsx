import React, { FC } from "react";
import tw from "twin.macro";
import { css, SerializedStyles } from "@emotion/core";

export type HRProps = {
  css?: SerializedStyles;
};

const HR: FC<HRProps> = () => {
  return (
    <hr
      css={css`
        ${tw`my-16 border-t border-gray-300`}
      `}
    />
  );
};

export default HR;
