import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { InputProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
 *
 * `<input>` elements with `type="file"` let the user choose one or more files from their device storage. Once chosen, the files can be uploaded
 * to a server using form submission, or manipulated using JavaScript code and the File API.
 *
 * ## Usage Notes
 *
 * ### Specify File Type
 *
 * A **unique file type specifier** is a string that describes a type of file that may be selected by the user in an `<input>` element of type
 * file. Each unique file type specifier may take one of the following forms:
 *
 * - A valid case-insensitive filename extension, starting with a period (".") character. For example: `.jpg`, `.pdf`, or `.doc`.
 * - A valid MIME type string, with no extensions.
 * - The string `audio/*` meaning "any audio file".
 * - The string `video/*` meaning "any video file".
 * - The string `image/*` meaning "any image file".
 *
 * The accept attribute takes as its value a string containing one or more of these unique file type specifiers, separated by commas. For
 * example, a file picker that needs content that can be presented as an image, including both standard image formats and PDF files, might look
 * like this:
 *
 * ```
 * <input type="file" accept="image/*,.pdf">
 * ```
 *
 * #### Security
 *
 * The `accept` attribute doesn't validate the types of the selected files; it simply provides hints for browsers to guide users towards
 * selecting the correct file types.
 *
 * **Because of this, you should make sure that the `accept` attribute is backed up by appropriate server-side validation.**
 *
 */
const InputFile = ({
  css,
  ...props
}: Omit<InputProps, "type">): ReactElement => {
  return <motion.input type="file" {...props} css={emotionCss([css])} />;
};
export default InputFile;
