import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { OptionProps } from "@components/atoms/atom-types";

const Option = ({ children, cssProp, ...props }: OptionProps): ReactElement => {
  return (
    <option {...props} css={emotionCss([cssProp])}>
      {children}
    </option>
  );
};
export default Option;
