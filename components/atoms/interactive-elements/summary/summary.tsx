import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SummaryProps } from "@components/atoms/atom-types";

const Summary = ({ children, css, ...props }: SummaryProps): ReactElement => {
  return (
    <summary {...props} css={emotionCss([css])}>
      {children}
    </summary>
  );
};
export default Summary;
