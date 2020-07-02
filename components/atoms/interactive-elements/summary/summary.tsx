import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SummaryProps } from "@components/atoms/atom-types";

const Summary = ({
  children,
  cssProp,
  ...props
}: SummaryProps): ReactElement => {
  return (
    <summary {...props} css={emotionCss([cssProp])}>
      {children}
    </summary>
  );
};
export default Summary;
