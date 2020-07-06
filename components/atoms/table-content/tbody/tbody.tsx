import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TbodyProps } from "@components/atoms/atom-types";

const Tbody = ({ children, css, ...props }: TbodyProps): ReactElement => {
  return (
    <tbody css={emotionCss([css])} {...props}>
      {children}
    </tbody>
  );
};

export default Tbody;
