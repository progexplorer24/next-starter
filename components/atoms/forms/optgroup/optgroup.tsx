import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { OptgroupProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
 *
 * The HTML `<optgroup>` element creates a grouping of options within a `<select>` element.
 *
 *
 */
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
