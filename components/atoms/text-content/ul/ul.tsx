import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { UlProps } from "@components/atoms/atom-types";

const Ul = ({ children, css, ...props }: UlProps): ReactElement => {
  return (
    <ul {...props} css={emotionCss([tw`mt-6`, css])}>
      {children}
    </ul>
  );
};
export default Ul;
