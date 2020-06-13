import React, { FC } from "react";
import tw from "twin.macro";
import { css, SerializedStyles } from "@emotion/core";

export type HRProps = {
  css?: SerializedStyles;
};

const HR: FC<HRProps> = () => {
  return (
    /* !!-example-!!*/
    <hr
      css={css`
        ${tw`my-16 border-t border-gray-300`}
      `}
    />
    /* @@-example-@@*/
  );
};

export default HR;
