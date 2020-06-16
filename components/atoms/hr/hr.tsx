import React, { ReactElement } from "react";
import tw from "twin.macro";
import { css as emotionCss, SerializedStyles } from "@emotion/core";

export type HrProps = {
  css?: SerializedStyles;
  className?: string;
};

const Hr = ({ css, ...props }: HrProps): ReactElement => {
  return (
    /* !!-example-!!*/
    <hr css={emotionCss([tw`my-16 border-t border-gray-300`])} {...props} />
    /* @@-example-@@*/
  );
};

export default Hr;
