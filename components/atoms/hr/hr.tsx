import React, { ReactElement } from "react";
import tw from "twin.macro";
import { css, SerializedStyles } from "@emotion/core";

export type HRProps = {
  css?: SerializedStyles;
};

const HR = (props: HRProps): ReactElement => {
  return (
    /* !!-example-!!*/
    <hr
      css={css`
        ${tw`my-16 border-t border-gray-300`}
      `}
      {...props}
    />
    /* @@-example-@@*/
  );
};

export default HR;
