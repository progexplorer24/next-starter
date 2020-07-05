import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { LegendProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
 *
 * ## Important
 *
 * We don use legend tag because of this [issue](https://bugs.chromium.org/p/chromium/issues/detail?id=375693).
 *
 * Instead we will use alternative solution that is equally accessible and don't cause problems.
 *
 * The HTML <legend> element represents a caption for the content of its parent <fieldset>.
 *
 *
 */
const Legend = ({ children, cssProp, ...props }: LegendProps): ReactElement => {
  return (
    <span {...props} css={emotionCss([cssProp])}>
      {children}
    </span>
  );
};
export default Legend;
