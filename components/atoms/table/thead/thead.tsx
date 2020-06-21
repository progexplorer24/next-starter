import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import { TrProps } from "../tr/tr";

export type TheadProps = {
  css?: SerializedStyles;
  className?: string;
  children?:
    | ReactElement<TrProps, (props: TrProps) => ReactElement>
    | ReactElement<TrProps, (props: TrProps) => ReactElement>[];
};

const Thead = ({ children, css, ...props }: TheadProps): ReactElement => {
  return (
    <thead {...props} css={emotionCss([css])}>
      {children}
    </thead>
  );
};

export default Thead;
