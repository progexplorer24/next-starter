import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Td from "@components/atoms/table-content/td/td";
import type { TdProps } from "@components/atoms/atom-types";

const RightCol = ({ children, css, ...props }: TdProps): ReactElement => {
  return (
    <Td
      css={emotionCss([tw`p-2 font-mono text-xs text-purple-600`, css])}
      {...props}
    >
      {children}
    </Td>
  );
};

export default RightCol;
