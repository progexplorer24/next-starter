import { ReactElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";
import type { TbodyProps } from "./tbody/tbody";
import type { TheadProps } from "./thead/thead";
import type { TrProps } from "./tr/tr";

export type TableProps = {
  css?: SerializedStyles;
  className?: string;
  children?:
    | ReactElement<
        TbodyProps | TheadProps | TrProps,
        (props: TbodyProps | TheadProps | TrProps) => ReactElement
      >
    | ReactElement<
        TbodyProps | TheadProps | TrProps,
        (props: TbodyProps | TheadProps | TrProps) => ReactElement
      >[];
};

const Table = ({ children, css, ...props }: TableProps): ReactElement => (
  <table
    css={emotionCss([tw`w-full mt-6 text-left border-collapse`])}
    {...props}
  >
    {children}
  </table>
);

export default Table;
