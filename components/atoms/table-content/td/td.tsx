import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TdProps } from "@components/atoms/atom-types";

const Td = ({ children, css, ...props }: TdProps): ReactElement => {
  return (
    <td css={emotionCss([tw`p-2`, css])} {...props}>
      {children}
    </td>
  );
};

export default Td;
