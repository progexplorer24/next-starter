import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FormProps } from "@components/atoms/atom-types";

const Form = ({ children, cssProp, ...props }: FormProps): ReactElement => {
  return (
    <form {...props} css={emotionCss([cssProp])}>
      {children}
    </form>
  );
};
export default Form;
