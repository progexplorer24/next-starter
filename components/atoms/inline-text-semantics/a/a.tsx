import React from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { AProps } from "@components/atoms/atom-types";
import { motion } from "framer-motion";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
 *
 * The HTML `<a>` element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in
 * the same page, or anything else a URL can address. Content within each `<a>` should indicate the link's destination.
 *
 * ## Security
 *
 *  When using target, add `rel="noreferrer noopener"` to avoid exploitation of the window.opener API.
 *
 * Linking to another page with target="_blank" will run the new page in the same process as your page. If the new page executes JavaScript, your
 * page's performance may suffer. This can also be avoided by using rel="noreferrer noopener".
 *
 * ## Usage Notes
 *
 * ### Linking to an element on the same page
 *
 * ```
 * <!-- <a> element links to the section below -->
 * <p><a href="#Section_further_down">
 *   Jump to the heading below
 * </a></p>
 *
 * <!-- Heading to link to -->
 * <h2 id="Section_further_down">Section further down</h2>
 * ```
 *
 * ### Linking to an email address
 *
 * To create links that open in the user's email program to let them send a new message, use the `mailto:` scheme:
 *
 * ```
 *  <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
 * ```
 *
 * ### Linking to telephone numbers
 *
 * ```
 * <a href="tel:+49.157.0156">+49 157 0156</a>
 * <a href="tel:+1(555)5309">(555) 5309</a>
 * ```
 *
 * tel: link behavior varies with device capabilities:
 *
 * - Cellular devices autodial the number.
 * - Most operating systems have programs that can make calls, like Skype or FaceTime.
 * - Websites can make phone calls with registerProtocolHandler, such as web.skype.com.
 * - Other behaviors include saving the number to contacts, or sending the number to another device.
 *
 * ### Using the downolad attribute to save a `<canvas` as a PNG
 *
 * To save a `<canvas>` element’s contents as an image, you can create a link with a `download` attribute and the canvas data as a `data:` URL:
 *
 * ## Accessibility
 *
 * ### Strong Link Text
 *
 * **The content inside a link should indicate where the link goes**, even out of context.
 *
 * ### Using anchor as button
 *
 * Anchor elements are often abused as fake buttons by setting their `href` to `#` or `javascript:void(0)` to prevent the page from refreshing,
 * then listening for their click events .
 *
 *  These bogus href values cause unexpected behavior when copying/dragging links, opening links in a new tab/window, bookmarking, or when
 *  JavaScript is loading, errors, or is disabled. They also convey incorrect semantics to assistive technologies, like screen readers.
 *
 * Use a `<button>` instead. In general, **you should only use a hyperlink for navigation to a real URL.**
 *
 * ### Skip links
 *
 * A skip link is a link placed as early as possible in `<body>` content that points to the beginning of the page's main content. Usually, CSS
 * hides a skip link offscreen until focused.
 *
 *
 */
const A = React.forwardRef<HTMLAnchorElement, AProps>(
  ({ children, href, css, ...props }, ref) => {
    return (
      <motion.a
        ref={ref}
        href={href}
        css={emotionCss([tw`font-bold underline cursor-pointer`, css])}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
);

export default A;
