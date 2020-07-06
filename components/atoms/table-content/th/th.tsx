import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { ThProps } from "@components/atoms/atom-types";

const Th = ({ children, css, ...props }: ThProps): ReactElement => {
  return (
    <th css={emotionCss([tw`p-2`, css])} {...props}>
      {children}
    </th>
  );
};

export default Th;
