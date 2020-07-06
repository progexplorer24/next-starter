import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ImgProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 *
 * The HTML `<img>` element embeds an image into the document.
 *
 * ## Security
 *
 * Although `<img>` elements have innocent uses, they can have undesirable consequences for user security and privacy. See
 * [Referer header: privacy and security concerns](https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for more information and mitigations.
 *
 * ## Accessibility Concerns
 *
 * An alt attribute's value should clearly and concisely describe the image's content. It should not describe the presence of
 * the image itself or the file name of the image. If the alt attribute is purposefully left off because the image has no
 * textual equivalent, consider alternate methods to present what the image is trying to communicate.
 *
 */
const Img = ({ alt = "", src, css, ...props }: ImgProps): ReactElement => {
  return <img alt={alt} src={src} css={emotionCss([css])} {...props} />;
};

export default Img;
