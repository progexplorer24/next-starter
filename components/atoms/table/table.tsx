import { ReactNode, ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";

export type TableProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Table = ({ children, ...props }: TableProps): ReactElement => (
  <table
    css={css`
      ${tw`w-full mt-6 text-left border-collapse`}
    `}
    {...props}
  >
    {children}
  </table>
);

export default Table;
