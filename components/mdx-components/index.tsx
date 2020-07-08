import { ReactElement } from "react";
import P from "@components/basic/p/p";
import H1 from "@components/basic/h1/h1";
import H2 from "@components/basic/h2/h2";
import H3 from "@components/basic/h3/h3";
import H4 from "@components/basic/h4/h4";
import H5 from "@components/basic/h5/h5";
import H6 from "@components/basic/h6/h6";
import InlineCode from "@components/basic/inline-code/inline-code";
import A from "@components/basic/a/a";
import Table from "@components/atoms/table-content/table/table";
import Tr from "@components/atoms/table-content/tr/tr";
import Ul from "@components/basic/lists/ul/ul";
import Li from "@components/basic/lists/li/li";
import Ol from "@components/basic/lists/ol/ol";
import Hr from "@components/atoms/text-content/hr/hr";
import Img from "@components/atoms/multimedia/img/img";
import Code, { CodeProps } from "@components/code/code";
import Blockquote from "@components/basic/blockquote/blockquote";

import Th from "@components/basic/table/th/th";
import Td from "@components/basic/table/td/td";
import type {
  PProps,
  H1Props,
  H2Props,
  H3Props,
  H4Props,
  H5Props,
  H6Props,
  AProps,
  UlProps,
  LiProps,
  OlProps,
  BlockquoteProps,
  ThProps,
  TdProps,
  TableProps,
  TrProps,
  HrProps,
  ImgProps,
  CodeProps as InlineCodeProps,
} from "@components/atoms/atom-types";

const MdxComponents = {
  p: ({ children, ...props }: PProps): ReactElement => (
    <P {...props}>{children}</P>
  ),
  h1: ({ children, ...props }: H1Props): ReactElement => (
    <H1 {...props}>{children}</H1>
  ),
  h2: ({ children, ...props }: H2Props): ReactElement => (
    <H2 {...props}>{children}</H2>
  ),
  h3: ({ children, ...props }: H3Props): ReactElement => (
    <H3 {...props}>{children}</H3>
  ),
  h4: ({ children, ...props }: H4Props): ReactElement => (
    <H4 {...props}>{children}</H4>
  ),
  h5: ({ children, ...props }: H5Props): ReactElement => (
    <H5 {...props}>{children}</H5>
  ),
  h6: ({ children, ...props }: H6Props): ReactElement => (
    <H6 {...props}>{children}</H6>
  ),
  inlineCode: ({ children, ...props }: InlineCodeProps): ReactElement => (
    <InlineCode {...props}>{children}</InlineCode>
  ),
  a: ({ children, ...props }: AProps): ReactElement => (
    <A {...props}>{children}</A>
  ),
  table: ({ children, ...props }: TableProps): ReactElement => (
    <Table {...props}>{children}</Table>
  ),
  tr: ({ children, ...props }: TrProps): ReactElement => (
    <Tr {...props}>{children}</Tr>
  ),
  th: ({ children, ...props }: ThProps): ReactElement => (
    <Th {...props}>{children}</Th>
  ),
  td: ({ children, ...props }: TdProps): ReactElement => (
    <Td {...props}>{children}</Td>
  ),
  ul: ({ children, ...props }: UlProps): ReactElement => (
    <Ul {...props}>{children}</Ul>
  ),
  li: ({ children, ...props }: LiProps): ReactElement => (
    <Li {...props}>{children}</Li>
  ),
  ol: ({ children, ...props }: OlProps): ReactElement => (
    <Ol {...props}>{children}</Ol>
  ),
  hr: (props: HrProps): ReactElement => <Hr {...props} />,
  img: (props: ImgProps): ReactElement => <Img {...props} />,
  pre: (props: CodeProps): ReactElement => <Code {...props} />,
  blockquote: ({ children, ...props }: BlockquoteProps): ReactElement => (
    <Blockquote {...props}>{children}</Blockquote>
  ),
};

export default MdxComponents;
