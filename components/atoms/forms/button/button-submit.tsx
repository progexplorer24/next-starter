import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type ButtonSubmitProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const ButtonSubmit = ({
  children,
  css,
  ...props
}: ButtonSubmitProps): ReactElement => {
  return (
    <button type="submit" css={emotionCss([css])} {...props}>
      {children}
    </button>
  );
};
export default ButtonSubmit;
