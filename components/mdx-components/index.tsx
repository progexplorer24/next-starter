import { ReactElement } from "react";
import type { ParagraphProps } from "@components/atoms/p/p";
import type { HeadingProps } from "@components/atoms/headings/types";
import type { AProps } from "@components/atoms/a/a";
import type { UlProps } from "@components/atoms/lists/ul/ul";
import type { LiProps } from "@components/atoms/lists/li/li";
import type { OlProps } from "@components/atoms/lists/ol/ol";
import type { BlockquoteProps } from "@components/atoms/blockquote/blockquote";
import type { ThProps } from "@components/atoms/table/th/th";
import type { TdProps } from "@components/atoms/table/td/td";
import P from "@components/basic/p/p";
import H1 from "@components/basic/h1/h1";
import H2 from "@components/basic/h2/h2";
import H3 from "@components/basic/h3/h3";
import H4 from "@components/basic/h4/h4";
import H5 from "@components/basic/h5/h5";
import H6 from "@components/basic/h6/h6";
import InlineCode from "@components/basic/inline-code/inline-code";
import A from "@components/basic/a/a";
import Table, { TableProps } from "@components/atoms/table/table";
import Tr, { TrProps } from "@components/atoms/table/tr/tr";
import Ul from "@components/basic/lists/ul/ul";
import Li from "@components/basic/lists/li/li";
import Ol from "@components/basic/lists/ol/ol";
import Hr, { HrProps } from "@components/atoms/hr/hr";
import Img, { ImgProps } from "@components/atoms/img/img";
import Code, { CodeProps } from "@components/code/code";
import Blockquote from "@components/basic/blockquote/blockquote";

import Th from "@components/basic/table/th/th";
import Td from "@components/basic/table/td/td";
import type { CodeProps as InlineCodeProps } from "../atoms/code/code";

const MdxComponents = {
  p: ({ children, ...props }: ParagraphProps): ReactElement => (
    <P {...props}>{children}</P>
  ),
  h1: ({ children, ...props }: HeadingProps): ReactElement => (
    <H1 {...props}>{children}</H1>
  ),
  h2: ({ children, ...props }: HeadingProps): ReactElement => (
    <H2 {...props}>{children}</H2>
  ),
  h3: ({ children, ...props }: HeadingProps): ReactElement => (
    <H3 {...props}>{children}</H3>
  ),
  h4: ({ children, ...props }: HeadingProps): ReactElement => (
    <H4 {...props}>{children}</H4>
  ),
  h5: ({ children, ...props }: HeadingProps): ReactElement => (
    <H5 {...props}>{children}</H5>
  ),
  h6: ({ children, ...props }: HeadingProps): ReactElement => (
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
