import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { MapProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
 *
 * The HTML `<map>` element is used with `<area>` elements to define an image map (a clickable link area).
 *
 */
const Map = ({ children, css, ...props }: MapProps): ReactElement => {
  return (
    <map {...props} css={emotionCss([css])}>
      {children}
    </map>
  );
};
export default Map;
