import { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TableProps } from "@components/atoms/atom-types";

const Table = ({ children, css, ...props }: TableProps): ReactElement => (
  <table
    css={emotionCss([tw`w-full mt-6 text-left border-collapse`, css])}
    {...props}
  >
    {children}
  </table>
);

export default Table;
