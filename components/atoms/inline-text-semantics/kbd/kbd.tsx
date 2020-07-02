import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { KbdProps } from "@components/atoms/atom-types";

const Kbd = ({ children, cssProp, ...props }: KbdProps): ReactElement => {
  return (
    <kbd {...props} css={emotionCss([cssProp])}>
      {children}
    </kbd>
  );
};
export default Kbd;
