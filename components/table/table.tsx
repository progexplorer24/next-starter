import { ReactNode, FC } from "react";
import { css, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";

export type TableProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const Table: FC<TableProps> = ({ children, ...props }) => (
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

//  <THead
//       css={css`
//         ${tw`border-t border-b border-gray-400`}
//       `}
//     >
//       <TR>
//         <TH>Tailwind Class</TH>
//         <TH>Value</TH>
//       </TR>
//     </THead>
//     <TBody>
//   <TR>
//     <TD
//       css={css`
//         ${tw`p-2 font-mono text-xs font-semibold text-indigo-700`}
//       `}
//     >
//       text-xs
//     </TD>
//     <TD
//       css={css`
//         ${tw`p-2 font-mono text-xs text-purple-600`}
//       `}
//     >
//       font-size: .75rem;
//     </TD>
//   </TR>
//   <TR>
//     <td
//       css={css`
//         ${tw`p-2 font-mono text-xs border-t border-gray-300`}
//       `}
//     >
//       text-xs
//     </td>
//     <td
//       css={css`
//         ${tw`p-2 font-mono text-xs border-t border-gray-300`}
//       `}
//     >
//       font-size: .75rem;
//     </td>
//   </TR>
//   <TR>
//     <td
//       css={css`
//         ${tw`p-2 font-mono text-xs border-t border-gray-300`}
//       `}
//     >
//       text-xs
//     </td>
//     <td
//       css={css`
//         ${tw`p-2 font-mono text-xs border-t border-gray-300`}
//       `}
//     >
//       font-size: .75rem;
//     </td>
//   </TR>
// </TBody>
