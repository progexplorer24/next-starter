import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { SourceProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
 *
 * The HTML <source> element specifies multiple media resources for the **`<picture>`**, the **`<audio>`** element, or the **`<video>`** element. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 *
 * ## Usage Notes
 *
 * - The `<source>` element has no content.
 *
 *
 */
const Source = ({ css, ...props }: SourceProps): ReactElement => {
  return <motion.source {...props} css={emotionCss([css])} />;
};
export default Source;
