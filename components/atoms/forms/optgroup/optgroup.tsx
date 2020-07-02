import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { OptgroupProps } from "@components/atoms/atom-types";

const Optgroup = ({
  children,
  cssProp,
  ...props
}: OptgroupProps): ReactElement => {
  return (
    <optgroup {...props} css={emotionCss([cssProp])}>
      {children}
    </optgroup>
  );
};
export default Optgroup;
