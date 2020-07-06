import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { KbdProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
 *
 * The HTML Keyboard Input element (`<kbd>`) represents a span of inline text denoting textual user input from a keyboard, voice input, or any
 * other text entry device.
 *
 * ## Usage Notes
 *
 * Other elements can be used in tandem with `<kbd>` to represent more specific scenarios.
 *
 */
const Kbd = ({ children, css, ...props }: KbdProps): ReactElement => {
  return (
    <kbd {...props} css={emotionCss([css])}>
      {children}
    </kbd>
  );
};
export default Kbd;
