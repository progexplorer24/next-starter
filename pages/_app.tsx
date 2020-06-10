import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import { css } from "@emotion/core";
import tw from "twin.macro";

import P from "@components/p/p";
import type { ParagraphProps } from "@components/p/p";
import InlineCode, {
  InlineCodeProps,
} from "@components/inline-code/inline-code";
import A, { AProps } from "@components/a/a";
import H1 from "@components/headings/h1/h1";
import type { HeadingProps } from "@components/headings/types";
import H2 from "@components/headings/h2/h2";
import H3 from "@components/headings/h3/h3";
import H4 from "@components/headings/h4/h4";
import H5 from "@components/headings/h5/h5";
import H6 from "@components/headings/h6/h6";
import Table, { TableProps } from "@components/table/table";
import TR from "@components/table/tr/tr";
import TH, { THProps } from "@components/table/th/th";
import TD, { TDProps } from "@components/table/td/td";
import UL, { ULProps } from "@components/lists/ul/ul";
import LI, { LIProps } from "@components/lists/li/li";
import OL, { OLProps } from "@components/lists/ol/ol";
import HR, { HRProps } from "@components/hr";
import Img, { ImgProps } from "@components/img/img";
import Code, { CodeProps } from "@components/code/code";
import Blockquote, { BlockquoteProps } from "@components/blockquote/blockquote";
import globalStyles from "../styles/global-styles";

const mdxComponents = {
  p: ({ children, ...props }: ParagraphProps): JSX.Element => (
    <P
      css={css`
        ${tw`mt-6 leading-relaxed text-gray-700`}
      `}
      {...props}
    >
      {children}
    </P>
  ),
  h1: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H1
      css={css`
        ${tw`mt-6 text-4xl font-semibold md:font-light md:tracking-tight md:text-6xl`}
      `}
      {...props}
    >
      {children}
    </H1>
  ),
  h2: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H2
      css={css`
        ${tw`mt-6 text-3xl md:text-5xl md:font-light md:tracking-tight`}
      `}
      {...props}
    >
      {children}
    </H2>
  ),
  h3: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H3
      css={css`
        ${tw`mt-6 text-2xl tracking-wide md:text-4xl`}
      `}
      {...props}
    >
      {children}
    </H3>
  ),
  h4: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H4
      css={css`
        ${tw`mt-6 text-xl font-bold tracking-wide md:tracking-normal md:text-3xl`}
      `}
      {...props}
    >
      {children}
    </H4>
  ),
  h5: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H5
      css={css`
        ${tw`text-2xl`}
      `}
      {...props}
    >
      {children}
    </H5>
  ),
  h6: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H6
      css={css`
        ${tw`text-xl font-bold tracking-wide`}
      `}
      {...props}
    >
      {children}
    </H6>
  ),
  inlineCode: ({ children, ...props }: InlineCodeProps): JSX.Element => (
    <InlineCode {...props}>{children}</InlineCode>
  ),
  a: ({ children, ...props }: AProps): JSX.Element => (
    <A
      css={css`
        ${tw`text-blue-700`}
      `}
      {...props}
    >
      {children}
    </A>
  ),
  table: ({ children, ...props }: TableProps): JSX.Element => (
    <Table {...props}>{children}</Table>
  ),
  tr: ({ children, ...props }: TableProps): JSX.Element => (
    <TR {...props}>{children}</TR>
  ),
  th: ({ children, ...props }: THProps): JSX.Element => (
    <TH {...props}>{children}</TH>
  ),
  td: ({ children, ...props }: TDProps): JSX.Element => (
    <TD {...props}>{children}</TD>
  ),
  ul: ({ children, ...props }: ULProps): JSX.Element => (
    <UL {...props}>{children}</UL>
  ),
  li: ({ children, ...props }: LIProps): JSX.Element => (
    <LI {...props}>{children}</LI>
  ),
  ol: ({ children, ...props }: OLProps): JSX.Element => (
    <OL {...props}>{children}</OL>
  ),
  hr: (props: HRProps): JSX.Element => <HR {...props} />,
  img: (props: ImgProps): JSX.Element => <Img {...props} />,
  pre: (props: CodeProps): JSX.Element => <Code {...props} />,
  blockquote: ({ children, ...props }: BlockquoteProps): JSX.Element => (
    <Blockquote {...props}>{children}</Blockquote>
  ),
};

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <MDXProvider components={mdxComponents}>
    {globalStyles}
    <Component {...pageProps} />
  </MDXProvider>
);
