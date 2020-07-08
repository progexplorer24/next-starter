import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { SummaryProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
 *
 * The HTML Disclosure Summary element (`<summary>`) element specifies a summary, caption, or legend for a `<details>` element's
 * disclosure box. Clicking the `<summary>` element toggles the state of the parent `<details>` element open and closed.
 *
 * ## Usage Notes
 *
 * The `<summary>` element's contents can be any heading content, plain text, or HTML that can be used within a paragraph.
 *
 * A `<summary>` element may only be used as the first child of a `<details>` element. When the user clicks on the summary, the
 * parent `<details>` element is toggled open or closed, and then a toggle event is sent to the `<details>` element, which can
 * be used to let you know when this state change occurs.
 *
 */
const Summary = ({ children, css, ...props }: SummaryProps): ReactElement => {
  return (
    <motion.summary {...props} css={emotionCss([css])}>
      {children}
    </motion.summary>
  );
};
export default Summary;
