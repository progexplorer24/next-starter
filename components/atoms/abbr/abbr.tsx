import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type AbbrProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Abbr = ({ children, css, ...props }: AbbrProps): ReactElement => {
  return (
    <abbr {...props} css={emotionCss([css])}>
      {children}
    </abbr>
  );
};
export default Abbr;
