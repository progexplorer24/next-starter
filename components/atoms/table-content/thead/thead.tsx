import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TheadProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
 *
 * The HTML `<thead>` element defines a set of rows defining the head of the columns of the table.
 *
 */
const Thead = ({ children, css, ...props }: TheadProps): ReactElement => {
  return (
    <thead {...props} css={emotionCss([css])}>
      {children}
    </thead>
  );
};

export default Thead;
