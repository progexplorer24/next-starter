import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomTd from "@components/atoms/table/td/td";
import type { TdProps } from "@components/atoms/atom-types";

const Td = ({ children, cssProp, ...props }: TdProps): ReactElement => {
  return (
    <AtomTd
      {...props}
      css={emotionCss([tw`text-sm font-semibold text-gray-700`, cssProp])}
    >
      {children}
    </AtomTd>
  );
};
export default Td;
