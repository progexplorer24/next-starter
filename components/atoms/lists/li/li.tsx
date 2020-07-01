import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { LiProps } from "@components/types";

const Li = ({ children, cssProp, ...props }: LiProps): ReactElement => {
  return (
    <li {...props} css={emotionCss([tw`list-none`, cssProp])}>
      {children}
    </li>
  );
};

export default Li;
