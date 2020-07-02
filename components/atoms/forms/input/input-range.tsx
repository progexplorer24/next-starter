import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";

const InputRange = ({
  cssProp,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return <input type="range" css={emotionCss([cssProp])} {...props} />;
};

export default InputRange;
