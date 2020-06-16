import React, { ReactNode, ReactElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";

type TbodyProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Tbody = ({ children, css, ...props }: TbodyProps): ReactElement => {
  return (
    <tbody css={emotionCss([css])} {...props}>
      {children}
    </tbody>
  );
};

export default Tbody;
