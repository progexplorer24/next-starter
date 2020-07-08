import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { TbodyProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
 *
 * The HTML Table Body element (`<tbody>`) encapsulates a set of table rows (`<tr>` elements), indicating that they comprise the
 * body of the table (`<table>`).
 *
 * ## Usage Notes
 *
 * - If the table includes a `<thead>` block (to semantically identify header rows), the `<tbody>` block must come after it.
 *
 * - If you use `<tbody>`, you can't also have table rows (`<tr>` elements) which are direct children of the `<table>` but not
 * included inside the `<tbody>`. All non-header and non-footer rows must be inside the `<tbody>` if one is used.
 *
 * - When printing a document, the `<thead>` and `<tfoot>` elements specify information that may be the same—or at least very
 *  similar—on every page of a multi-page table, while the `<tbody>` element's contents generally will differ from page to page.
 *
 * - When a table is presented in a screen context (such as a window) which is not large enough to display the entire table, the
 *   user agent may let the user scroll the contents of the `<thead>`, `<tbody>`, `<tfoot>`, and `<caption>` blocks separately
 *   from one another for the same parent table.
 *
 * - You may use more than one <tbody> per table as long as they are all consecutive. This lets you divide the rows in large
 *   tables into sections, each of which may be separately formatted if so desired.
 *
 */
const Tbody = ({ children, css, ...props }: TbodyProps): ReactElement => {
  return (
    <motion.tbody css={emotionCss([css])} {...props}>
      {children}
    </motion.tbody>
  );
};

export default Tbody;
