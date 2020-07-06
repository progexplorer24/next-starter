import { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TableProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
 *
 * The HTML `<table>` element represents tabular data — that is, information presented in a two-dimensional table comprised of
 * rows and columns of cells containing data.
 *
 * ## Accessibility concerns
 *
 * By supplying a `<caption>` element whose value clearly and concisely describes the table's purpose, it helps the people
 * decide if they need to read the rest of the table content or skip over it.
 *
 * ### Scope
 *
 * The scope attribute on header elements is redundant in simple contexts, because scope is inferred. However, some assistive
 * technologies may fail to draw correct inferences, so specifying header scope may improve user experiences. In complex tables,
 * scope can be specified so as to provide necessary information about the cells related to a header.
 *
 * ### Complicated tables
 *
 * Assistive technology such as screen readers may have difficulty parsing tables that are so complex that header cells can’t be
 * associated in a strictly horizontal or vertical way. This is typically indicated by the presence of the colspan and rowspan
 * attributes.
 *
 */
const Table = ({ children, css, ...props }: TableProps): ReactElement => (
  <table
    css={emotionCss([tw`w-full mt-6 text-left border-collapse`, css])}
    {...props}
  >
    {children}
  </table>
);

export default Table;
