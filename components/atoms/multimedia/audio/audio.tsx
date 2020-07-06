import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AudioProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
 *
 * The HTML `<audio>` element is used to embed sound content in documents. It may contain one or more audio sources, represented
 * using the src attribute or the `<source>` element: the browser will choose the most suitable one. It can also be the
 * destination for streamed media, using a MediaStream.
 *
 * ## Usage Notes
 *
 * Browsers don't all support the same file types and audio codecs; you can provide multiple sources inside nested `<source>`
 * elements, and the browser will then use the first one it understands.
 *
 * - If you don't specify the controls attribute, the audio player won't include the browser's default controls. You can,
 *   however, create your own custom controls using JavaScript and the HTMLMediaElement API.
 * - To allow precise control over your audio content, HTMLMediaElements fire many different events. This also provides a way to
 *   monitor the audio's fetching process so you can watch for errors or detect when enough is available to begin to play or
 *   manipulate it.
 * - You can also use the Web Audio API to directly generate and manipulate audio streams from JavaScript code rather than
 *   streaming pre-existing audio files.
 * - <audio> elements can't have subtitles or captions associated with them in the same way that <video> elements can. See
 *   WebVTT and Audio by Ian Devlin for some useful information and workarounds.
 *
 * ### Styling with CSS
 *
 * The `<audio>` element has no intrinsic visual output of its own unless the controls attribute is specified, in which case the
 * browser's default controls are shown.
 *
 * To get a consistent look and feel across browsers, you'll need to create custom controls; these can be marked up and styled
 * in whatever way you want, and then JavaScript can be used along with the HTMLMediaElement API to wire up their functionality.
 *
 * [Video player styling basics](https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics)
 *   provides some useful styling techniques — it is written in the context of `<video>`, but much of it is equally applicable
 * to `<audio>`.
 *
 * ## Accessibility Concerns
 *
 * Audio with spoken dialog should provide both captions and transcripts that accurately describe its content. Captions, which
 * are specified using WebVTT, allow people who are experiencing hearing loss to understand an audio recording's content as the
 * recording is being played, while transcripts allow people who need additional time to be able to review the recording's
 * content at a pace and format that is comfortable for them.
 *
 * The `<audio>` element doesn't directly support WebVTT. You will have to find a library or framework that provides the
 * capability for you, or write the code to display captions yourself. One option is to play your audio using a `<video>`
 * element, which does support WebVTT.
 *
 * Also it's a good practice to provide some content (such as the direct download link) as a fallback for viewers who use a
 * browser in which the <audio> element is not supported.
 *
 *
 */
const Audio = ({ children, css, ...props }: AudioProps): ReactElement => {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio {...props} css={emotionCss([css])}>
      {children}
    </audio>
  );
};
export default Audio;
