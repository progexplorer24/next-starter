import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { PcitureProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
 *
 * The HTML `<picture>` element contains zero or more `<source>` elements and one `<img>` element to offer alternative versions of an image for different display/device scenarios.
 *
 * ## Selecting Source
 *
 * The browser will consider each child <source> element and choose the best match among them. If no matches are found—or the browser doesn't support the `<picture>` element—the URL of the `<img>` element's src attribute is selected. The selected image is then presented in the space occupied by the `<img>` element.
 *
 * To decide which URL to load, the user agent examines each <source>'s srcset, media, and type attributes to select a compatible image that best matches the current layout and capabilities of the display device.
 *
 * Common use cases for `<picture>`:
 *
 * - **Art direction.** Cropping or modifying images for different media conditions (for example, loading a simpler version of an image which has too many details, on smaller displays).
 * - **Offering alternative image formats**, for cases where certain formats are not supported.
 * - **Saving bandwidth and speeding page load times** by loading the most appropriate image for the viewer's display.
 *
 * ## Usage Notes
 *
 * - You should style `img` elemnt inside picture **not** `picture` element itself.
 *
 * ### The Media Attribute
 *
 * The media attribute specifies a media condition (similar to a media query) that the user agent will evaluate for each `<source>` element.
 *
 * If the <source>'s media condition evaluates to false, the browser skips it and evaluates the next element inside <picture>.
 *
 * ```
 * <picture>
 *   <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
 *   <img src="mdn-logo-narrow.png" alt="MDN">
 * </picture>
 * ```
 *
 * ### The Srcset Attribute
 *
 * The srcset attribute is used to offer list of possible images based on size.
 *
 * It is composed of a comma-separated list of image descriptors. Each image descriptor is composed of a URL of the image, and either...
 *
 * - a width descriptor, followed by a w (such as 300w);
 * OR
 * - a pixel density descriptor, followed by an x (such as 2x) to serve a high-res image for high-DPI screens.
 *
 * ```
 * <picture>
 *   <source srcset="logo-768.png 768w, logo-768-1.5x.png 1.5x">
 *   <source srcset="logo-480.png, logo-480-2x.png 2x">
 *   <img src="logo-320.png" alt="logo">
 * </picture>
 * ```
 *
 * ### The Type Attribute
 *
 * The type attribute specifies a MIME type for the resource URL(s) in the <source> element's srcset attribute. If the user agent does not   support the given type, the <source> element is skipped.
 *
 * ```
 * <picture>
 *   <source srcset="logo.webp" type="image/webp">
 *   <img src="logo.png" alt="logo">
 * </picture>
 *```
 *
 */
const Pciture = ({ children, css, ...props }: PcitureProps): ReactElement => {
  return (
    <picture {...props} css={emotionCss([css])}>
      {children}
    </picture>
  );
};
export default Pciture;
