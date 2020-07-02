import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { PcitureProps } from "@components/atoms/atom-types";

const Pciture = ({
  children,
  cssProp,
  ...props
}: PcitureProps): ReactElement => {
  return (
    <picture {...props} css={emotionCss([cssProp])}>
      {children}
    </picture>
  );
};
export default Pciture;
