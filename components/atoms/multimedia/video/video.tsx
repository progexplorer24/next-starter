import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { VideoProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
 *
 * The HTML Video element (`<video>`) embeds a media player which supports video playback into the document. You can use
 * `<video>` for audio content as well, but the `<audio>` element may provide a more appropriate user experience.
 *
 * ## Usage Notes
 *
 * Browsers don't all support the same video formats; you can provide multiple sources inside nested `<source>` elements, and
 * the browser will then use the first one it understands.
 *
 * - If you don't specify the controls attribute, the video won't include the browser's default controls; you can create your
 * own custom controls using JavaScript and the HTMLMediaElement API.
 *
 * - To allow precise control over your video (and audio) content, HTMLMediaElements fire many different events. In addition to
 *   providing controllability, these events let you monitor the progress of both download and playback of the media, as well as
 *   the playback state and position.
 *
 * - You can use the object-position property to adjust the positioning of the video within the element's frame, and the
 *   object-fit property to control how the video's size is adjusted to fit within the frame.
 *
 *  - To show subtitles/captions along with your video, you can use some JavaScript along with the `<track>` element and the
 *    WebVTT format. See Adding captions and subtitles to HTML5 video for more information.
 *
 *  - You can play audio files using a `<video>` element. This can be useful if, for example, you need to perform audio with a
 *    WebVTT transcript, since the `<audio>` element doesn't allow captions using WebVTT.
 *
 *  - To test the fallback content on browsers that support the element, you can replace `<video>` with a non-existing element
 *    like `<notavideo>`.
 *
 * ## Accessibility Concerns
 *
 * Videos should provide both captions and transcripts that accurately describe its content. Captions allow people who are
 * experiencing hearing loss to understand a video's audio content as the video is being played, while transcripts allow people
 * who need additional time to be able to review audio content at a pace and format that is comfortable for them.
 *
 */
const Video = ({ children, css, ...props }: VideoProps): ReactElement => {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video {...props} css={emotionCss([css])}>
      {children}
    </video>
  );
};
export default Video;
