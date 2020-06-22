import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type AsideProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Aside = ({ children, css, ...props }: AsideProps): ReactElement => {
  return (
    <aside {...props} css={emotionCss([css])}>
      {children}
    </aside>
  );
};
export default Aside;
