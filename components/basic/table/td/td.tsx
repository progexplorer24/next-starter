import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomTd, { TdProps } from "@components/atoms/table/td/td";

const Td = ({ children, css, ...props }: TdProps): ReactElement => {
  return (
    <AtomTd
      {...props}
      css={emotionCss([tw`text-sm font-semibold text-gray-700`, css])}
    >
      {children}
    </AtomTd>
  );
};
export default Td;
