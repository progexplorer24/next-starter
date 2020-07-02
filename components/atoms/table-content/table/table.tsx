import { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { TableProps } from "@components/atoms/atom-types";

const Table = ({ children, cssProp, ...props }: TableProps): ReactElement => (
  <table
    css={emotionCss([tw`w-full mt-6 text-left border-collapse`, cssProp])}
    {...props}
  >
    {children}
  </table>
);

export default Table;
