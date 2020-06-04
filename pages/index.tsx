import { NextPage } from "next";
import { css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import Icon from "@svg/icon-arrow-left.svg";
import Table from "@components/table/table";
import THead from "@components/table/thead/thead";
import TH from "@components/table/th/th";
import TR from "@components/table/tr/tr";
import TBody from "@components/table/tbody/tbody";
import TD from "@components/table/td/td";

const Home: NextPage = () => (
  <main>
    <h1
      css={css`
        ${tw`text-6xl`}
      `}
    >
      This is the heading
    </h1>
    <Icon
      css={css`
        ${tw`w-8 h-8`}
      `}
    />
    <Table>
      <THead
        css={css`
          ${tw`border-t border-b border-gray-400`}
        `}
      >
        <TR>
          <TH>Tailwind Class</TH>
          <TH>Value</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD
            css={css`
              ${tw`p-2 font-mono text-xs font-semibold text-indigo-700`}
            `}
          >
            text-xs
          </TD>
          <TD
            css={css`
              ${tw`p-2 font-mono text-xs text-purple-600`}
            `}
          >
            font-size: .75rem;
          </TD>
        </TR>
        <TR>
          <td
            css={css`
              ${tw`p-2 font-mono text-xs border-t border-gray-300`}
            `}
          >
            text-xs
          </td>
          <td
            css={css`
              ${tw`p-2 font-mono text-xs border-t border-gray-300`}
            `}
          >
            font-size: .75rem;
          </td>
        </TR>
        <TR>
          <td
            css={css`
              ${tw`p-2 font-mono text-xs border-t border-gray-300`}
            `}
          >
            text-xs
          </td>
          <td
            css={css`
              ${tw`p-2 font-mono text-xs border-t border-gray-300`}
            `}
          >
            font-size: .75rem;
          </td>
        </TR>
      </TBody>
    </Table>
  </main>
);

export default Home;
