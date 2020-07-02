import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DatalistProps } from "@components/atoms/atom-types";

const Datalist = ({
  children,
  cssProp,
  ...props
}: DatalistProps): ReactElement => {
  return (
    <datalist {...props} css={emotionCss([cssProp])}>
      {children}
    </datalist>
  );
};
export default Datalist;
