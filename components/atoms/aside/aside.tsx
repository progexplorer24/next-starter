import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AsideProps } from "@components/types";

const Aside = ({ children, cssProp, ...props }: AsideProps): ReactElement => {
  return (
    <aside {...props} css={emotionCss([cssProp])}>
      {children}
    </aside>
  );
};
export default Aside;
