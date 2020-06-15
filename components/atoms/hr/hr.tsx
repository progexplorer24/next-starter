import React, { ReactElement } from "react";
import tw from "twin.macro";
import { css, SerializedStyles } from "@emotion/core";

export type HrProps = {
  css?: SerializedStyles;
};

const Hr = (props: HrProps): ReactElement => {
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

export default Hr;
