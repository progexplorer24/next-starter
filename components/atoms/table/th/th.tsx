import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { ThProps } from "@components/types";

const Th = ({ children, cssProp, ...props }: ThProps): ReactElement => {
  return (
    <th css={emotionCss([tw`p-2`, cssProp])} {...props}>
      {children}
    </th>
  );
};

export default Th;
