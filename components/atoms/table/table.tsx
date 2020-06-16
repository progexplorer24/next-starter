import { ReactNode, ReactElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";

export type TableProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
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
