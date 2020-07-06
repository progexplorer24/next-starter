import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DetailsProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 *
 * **Warning! This element is not working in versions earlier than Edge 79**
 *
 * The HTML Details Element (`<details>`) creates a disclosure widget in which information is visible only when the widget is
 * toggled into an "open" state. A summary or label can be provided using the `<summary>` element.
 *
 * A `<details>` widget can be in one of two states. The default closed state displays only the triangle and the label inside
 * `<summary>` (or a user agent-defined default string if no `<summary>`). This might look like the following:
 *
 * ## Usage Notes
 *
 * Unfortunately, at this time there's no built-in way to animate the transition between open and closed.
 *
 * Fully standards-compliant implementations automatically apply the CSS `display: list-item` to the `<summary>` element. You
 * can use this to customize its appearance further.
 *
 * ### Customizing widget
 *
 * The disclosure triangle itself can be customized, although this is not as broadly supported. There are variations in how
 * browsers support this customization due to experimental implementations as the element was standardized, so we'll have to use
 * multiple approaches for a while.
 *
 * The `<summary>` element supports the list-style shorthand property and its longhand properties, such as list-style-type, to
 * change the disclosure triangle to whatever you choose (usually with list-style-image). For example, we can remove the
 * disclosure widget icon by setting list-style: none.
 *
 */
const Details = ({ children, css, ...props }: DetailsProps): ReactElement => {
  return (
    <details {...props} css={emotionCss([css])}>
      {children}
    </details>
  );
};
export default Details;
