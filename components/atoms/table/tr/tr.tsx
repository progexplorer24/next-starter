import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TrProps } from "@components/types";

const Tr = ({ children, cssProp, ...props }: TrProps): ReactElement => {
  return (
    <tr
      css={emotionCss([tw`border-t border-b border-gray-400`, cssProp])}
      {...props}
    >
      {children}
    </tr>
  );
};

export default Tr;
