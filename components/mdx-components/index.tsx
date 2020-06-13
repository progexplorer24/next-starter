import type { ParagraphProps } from "@components/atoms/p/p";
import P from "@components/basic/p/p";
import H1 from "@components/basic/h1/h1";
import type { HeadingProps } from "@components/atoms/headings/types";
import H2 from "@components/basic/h2/h2";
import H3 from "@components/basic/h3/h3";
import H4 from "@components/basic/h4/h4";
import H5 from "@components/basic/h5/h5";
import H6 from "@components/basic/h6/h6";
import InlineCode, {
  InlineCodeProps,
} from "@components/basic/inline-code/inline-code";
import type { AProps } from "@components/atoms/a/a";
import A from "@components/basic/a/a";
import Table, { TableProps } from "@components/atoms/table/table";
import TR from "@components/atoms/table/tr/tr";
import TH, { THProps } from "@components/atoms/table/th/th";
import TD, { TDProps } from "@components/atoms/table/td/td";
import UL, { ULProps } from "@components/atoms/lists/ul/ul";
import LI, { LIProps } from "@components/atoms/lists/li/li";
import OL, { OLProps } from "@components/atoms/lists/ol/ol";
import HR, { HRProps } from "@components/atoms/hr/hr";
import Img, { ImgProps } from "@components/atoms/img/img";
import Code, { CodeProps } from "@components/code/code";
import type { BlockquoteProps } from "@components/atoms/blockquote/blockquote";
import Blockquote from "@components/basic/blockquote/blockquote";

const MdxComponents = {
  p: ({ children, ...props }: ParagraphProps): JSX.Element => (
    <P {...props}>{children}</P>
  ),
  h1: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H1 {...props}>{children}</H1>
  ),
  h2: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H2 {...props}>{children}</H2>
  ),
  h3: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H3 {...props}>{children}</H3>
  ),
  h4: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H4 {...props}>{children}</H4>
  ),
  h5: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H5 {...props}>{children}</H5>
  ),
  h6: ({ children, ...props }: HeadingProps): JSX.Element => (
    <H6 {...props}>{children}</H6>
  ),
  inlineCode: ({ children, ...props }: InlineCodeProps): JSX.Element => (
    <InlineCode {...props}>{children}</InlineCode>
  ),
  a: ({ children, ...props }: AProps): JSX.Element => (
    <A {...props}>{children}</A>
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

export default MdxComponents;
