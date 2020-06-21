import React, { ReactElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";
import type { TrProps } from "../tr/tr";

export type TbodyProps = {
  css?: SerializedStyles;
  className?: string;
  children?:
    | ReactElement<TrProps, (props: TrProps) => ReactElement>
    | ReactElement<TrProps, (props: TrProps) => ReactElement>[];
};

const Tbody = ({ children, css, ...props }: TbodyProps): ReactElement => {
  return (
    <tbody css={emotionCss([css])} {...props}>
      {children}
    </tbody>
  );
};

export default Tbody;
