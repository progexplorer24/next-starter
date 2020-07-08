import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { TrackProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
 *
 * The HTML `<track>` element is used as a child of the media elements `<audio>` and `<video>`. It lets you specify timed text
 * tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt
 * files) — Web Video Text Tracks or Timed Text Markup Language (TTML).
 *
 *
 *
 */
const Track = ({ css, ...props }: TrackProps): ReactElement => {
  return <motion.track {...props} css={emotionCss([css])} />;
};
export default Track;
