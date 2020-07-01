import { SerializedStyles } from "@emotion/core";
import { TwStyle } from "twin.macro";
import { ReactElement, ReactNode, FunctionComponentElement } from "react";
import type { LinkProps } from "next/link";

/**
 * Partial Types
 */

export type EmotionProps = {
  css?: SerializedStyles;
  className?: string;
  __EMOTION_TYPE_PLEASE_DO_NOT_USE__?: (props: EmotionProps) => ReactElement;
};

type CssProp = {
  css?: SerializedStyles;
};

/**
 * --- ATOM ELEMENTS ------
 * This section includes all typings for atom elements
 */

/**
 * Default HTML Component Type
 */

export type StandardHtmlComponent = React.HTMLAttributes<HTMLElement> & {
  cssProp?: SerializedStyles;
  children: ReactNode;
};

/**
 * Anchor Types
 */

export type AProps = {
  cssProp?: SerializedStyles;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Button Types
 */

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  cssProp?: SerializedStyles;
  children: ReactNode;
};

/**
 * Abbr Types
 */

export type AbbrProps = StandardHtmlComponent;

/**
 * Article Types
 */

export type ArticleProps = StandardHtmlComponent;

/**
 * Aside Types
 */

export type AsideProps = StandardHtmlComponent;

/**
 * Blockquote Types
 */

export type BlockquoteProps = Omit<
  React.BlockquoteHTMLAttributes<HTMLElement>,
  "children"
> & {
  children: ReactElement<CssProp>;
  cssProp?: SerializedStyles;
};

/**
 * Code Types
 */

export type CodeProps = StandardHtmlComponent;

/**
 * Footer Types
 */

export type FooterProps = StandardHtmlComponent;

/**
 * Heading Types
 */

export type HeadingProps = StandardHtmlComponent;

/**
 * Hr Types
 */

export type HrProps = Omit<StandardHtmlComponent, "children">;

/**
 * Image Types
 */

export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  cssProp?: SerializedStyles;
  src: string;
};

/**
 * List Item Types
 */

export type LiProps = React.LiHTMLAttributes<HTMLLIElement> & {
  cssProp?: SerializedStyles;
  children: ReactNode;
  listDecoration?: JSX.Element;
};

/**
 * Main Types
 */

export type MainProps = StandardHtmlComponent;

/**
 * Nav Types
 */

export type NavProps = StandardHtmlComponent;

/**
 * Next Link Types
 */

export type NextLinkProps = LinkProps & {
  css?: SerializedStyles;
  className?: string;
  href: string;
  children: ReactNode;
};

/**
 * Ordered List Types
 */

export type OlProps = Omit<
  React.OlHTMLAttributes<HTMLOListElement>,
  "children"
> & {
  cssProp?: SerializedStyles;
  children:
    | FunctionComponentElement<LiProps>
    | FunctionComponentElement<LiProps>[];
};

/**
 * Paragraph Types
 */

export type ParagraphProps = StandardHtmlComponent;

/**
 * Preformatted Text Types
 */

export type PreProps = StandardHtmlComponent;

/**
 * Section Types
 */

export type SectionProps = StandardHtmlComponent;

/**
 * Table Types
 */

export type TableProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  children?:
    | ReactElement<
        TbodyProps | TheadProps | TrProps,
        (props: TbodyProps | TheadProps | TrProps) => ReactElement
      >
    | ReactElement<
        TbodyProps | TheadProps | TrProps,
        (props: TbodyProps | TheadProps | TrProps) => ReactElement
      >[];
};

/**
 * Tbody Types
 */

export type TbodyProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  children?:
    | ReactElement<TrProps, (props: TrProps) => ReactElement>
    | ReactElement<TrProps, (props: TrProps) => ReactElement>[];
};

/**
 * Data Cell Types
 */

export type TdProps = React.TdHTMLAttributes<HTMLTableDataCellElement> & {
  cssProp?: SerializedStyles;
  children: ReactNode;
};

/**
 * Header Cell Types
 */

export type ThProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> & {
  cssProp?: SerializedStyles;
  children: ReactNode;
};

/**
 * Grouped Header content Types
 */

export type TheadProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  children?:
    | ReactElement<TrProps, (props: TrProps) => ReactElement>
    | ReactElement<TrProps, (props: TrProps) => ReactElement>[];
};

/**
 * Table Row Types
 */

export type TrProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  children?:
    | ReactElement<
        TdProps | ThProps,
        (props: TdProps | ThProps) => ReactElement
      >
    | ReactElement<
        TdProps | ThProps,
        (props: TdProps | ThProps) => ReactElement
      >[];
};

/**
 * Unordered List Types
 */

export type UlProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  icon?: IconTypeElement;
  children:
    | FunctionComponentElement<LiProps>
    | FunctionComponentElement<LiProps>[];
};

// ======================================================================================================
// ======================================================================================================

/**
 *  CUSTOM ELEMENTS
 */

export type TextHRProps = HrProps & {
  dataContent?: string;
};

// ======================================================================================================
// ======================================================================================================

/**
 * ---- Alert Types ----
 * This section includes all additional typings for custom elements
 */

export type AlertStyles = {
  iconStyles?: TwStyle | SerializedStyles;
  alertStyles?: TwStyle | SerializedStyles;
};

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  EmotionProps & {
    icon?: IconTypeElement | false;
    cssProp?: SerializedStyles;
    type?: "outlined" | "filled" | "default";
    children: ReactNode;
  };

/**
 * SVG Types
 */
type CustomSvgElement = SVGSVGElement & {
  css?: SerializedStyles;
};

export type IconTypeElement = ReactElement<
  CustomSvgElement,
  (props: SVGSVGElement) => ReactElement
>;
