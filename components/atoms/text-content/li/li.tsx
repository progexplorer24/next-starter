import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { LiProps } from "@components/atoms/atom-types";

const Li = ({ children, css, ...props }: LiProps): ReactElement => {
  return (
    <li {...props} css={emotionCss([tw`list-none`, css])}>
      {children}
    </li>
  );
};

export default Li;
