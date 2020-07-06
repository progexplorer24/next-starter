import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AreaProps } from "@atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
 *
 * The HTML `<area>` element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This
 * element is used only within a `<map>` element.
 *
 */
const Area = ({ css, alt = "", ...props }: AreaProps): ReactElement => {
  return <area alt={alt} {...props} css={emotionCss([css])} />;
};
export default Area;
