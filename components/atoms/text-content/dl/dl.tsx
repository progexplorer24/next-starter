import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DlProps } from "@components/atoms/atom-types";

const Dl = ({ children, css, ...props }: DlProps): ReactElement => {
  return (
    <dl {...props} css={emotionCss([css])}>
      {children}
    </dl>
  );
};
export default Dl;
