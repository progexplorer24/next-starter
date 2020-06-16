import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Td, { TdProps } from "@components/atoms/table/td/td";

const LeftCol = ({ children, css, ...props }: TdProps): ReactElement => {
  return (
    <Td
      css={emotionCss([
        tw`p-2 font-mono text-xs font-semibold text-indigo-700`,
        css,
      ])}
      {...props}
    >
      {children}
    </Td>
  );
};

export default LeftCol;
