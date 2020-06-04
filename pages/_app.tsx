import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import { css } from "@emotion/core";
import tw from "twin.macro";

import P from "@components/p/p";
import type { ParagraphProps } from "@components/p/p";
import InlineCode from "@components/inline-code/inline-code";
import type { InlineCodeProps } from "@components/inline-code/inline-code";
import A from "@components/a/a";
import type { AProps } from "@components/a/a";
import H1 from "@components/headings/h1/h1";
import type { HeadingProps } from "@components/headings/types";
import H2 from "@components/headings/h2/h2";
import H3 from "@components/headings/h3/h3";
import H4 from "@components/headings/h4/h4";
import H5 from "@components/headings/h5/h5";
import H6 from "@components/headings/h6/h6";
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
        ${tw`text-6xl font-light tracking-tight`}
      `}
      {...props}
    >
      {children}
    </H1>
  ),
  h2: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H2
      css={css`
        ${tw`text-5xl font-light tracking-tight`}
      `}
      {...props}
    >
      {children}
    </H2>
  ),
  h3: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H3
      css={css`
        ${tw`text-4xl`}
      `}
      {...props}
    >
      {children}
    </H3>
  ),
  h4: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H4
      css={css`
        ${tw`text-3xl tracking-wide`}
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
};

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <MDXProvider components={mdxComponents}>
    {globalStyles}
    <Component {...pageProps} />
  </MDXProvider>
);
