import { NextPage, GetStaticProps } from "next";
import { css } from "@emotion/core";

import Link from "next/link";
import tw from "twin.macro";
import Icon from "@svg/icon-arrow-left.svg";
import Table from "@components/table/table";
import THead from "@components/table/thead/thead";
import TH from "@components/table/th/th";
import TR from "@components/table/tr/tr";
import TBody from "@components/table/tbody/tbody";
import TD from "@components/table/td/td";
import UL from "@components/lists/ul/ul";
import LI from "@components/lists/li/li";
import TextHR from "@components/text-hr";
import Img from "@components/img/img";

const Home: NextPage = () => {
  // console.log(props);
  return (
    <main>
      <h1
        css={css`
          ${tw`text-6xl`}
        `}
      >
        This is the heading
      </h1>
      <Link href="/all-mdx-components">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>All Mdx components</a>
      </Link>
      <Icon
        css={css`
          ${tw`w-8 h-8`}
        `}
      />

      <Img
        css={css`
          ${tw`w-32 h-32`}
        `}
        alt="CDC 3d generated bacteria"
        src="../imgs/bacteria.jpg"
      />

      <UL>
        <LI>Hello world</LI>
        <LI>MDX List Element</LI>
        <LI>I&apos;m another LI element</LI>
        <LI>Last List Element</LI>
      </UL>

      <TextHR />

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
};

export default Home;

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
