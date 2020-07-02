import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { InputProps } from "@components/atoms/atom-types";

const InputFile = ({
  cssProp,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return <input type="file" {...props} css={emotionCss([cssProp])} />;
};
export default InputFile;
