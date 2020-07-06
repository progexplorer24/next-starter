import React, { ReactElement } from "react";
import tw from "twin.macro";
import { css as emotionCss } from "@emotion/core";
import type { HrProps } from "@components/atoms/atom-types";

const Hr = ({ css, ...props }: HrProps): ReactElement => {
  return (
    <hr
      css={emotionCss([tw`my-10 border-t border-gray-300`, css])}
      {...props}
    />
  );
};

export default Hr;
