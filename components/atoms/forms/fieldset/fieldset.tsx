import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { FieldsetProps } from "@components/atoms/atom-types";

const FieldSet = ({
  children,
  cssProp,
  ...props
}: FieldsetProps): ReactElement => {
  return (
    <fieldset {...props} css={emotionCss([cssProp])}>
      {children}
    </fieldset>
  );
};
export default FieldSet;
