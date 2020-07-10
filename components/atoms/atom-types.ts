import { SerializedStyles } from "@emotion/core";
import { ReactElement, FunctionComponentElement } from "react";
import { HTMLMotionProps, SVGMotionProps, MotionProps } from "framer-motion";

/**
 * --------- Helper Types -----------------------------------------------------
 */

type Css = {
  css?: SerializedStyles;
};

export type EmotionProps = Css & {
  className?: string;
  __EMOTION_TYPE_PLEASE_DO_NOT_USE__?: (props: EmotionProps) => ReactElement;
};

type CustomSvgElement = SVGSVGElement & Css;

export type IconTypeElement = ReactElement<
  CustomSvgElement,
  (props: SVGSVGElement) => ReactElement
>;

// ======================================
// ======================================

/**
 * --- ATOM ELEMENTS ------
 * This section includes all typings for atom elements
 */

export type StandardHtmlComponent = React.HTMLAttributes<HTMLElement> & Css;
export type AProps = HTMLMotionProps<"a"> & Css;
export type AddressProps = HTMLMotionProps<"address"> & Css;

export type AreaProps = HTMLMotionProps<"area"> &
  Omit<React.AreaHTMLAttributes<HTMLAreaElement>, "alt" | "children"> &
  Css & {
    alt: string;
  };

export type AbbrProps = HTMLMotionProps<"abbr"> & Css;
export type ArticleProps = HTMLMotionProps<"address"> & Css;
export type AsideProps = HTMLMotionProps<"aside"> & Css;
export type AudioProps = HTMLMotionProps<"audio"> & Css;

export type BlockquoteProps = Omit<HTMLMotionProps<"blockquote">, "children"> &
  Css & {
    children: FunctionComponentElement<Css & MotionProps>;
  };

export type ButtonProps = HTMLMotionProps<"button"> & Css;
export type CanvasProps = HTMLMotionProps<"canvas"> &
  React.CanvasHTMLAttributes<HTMLCanvasElement> &
  Css;
export type CaptionProps = HTMLMotionProps<"caption"> & Css;
export type CiteProps = HTMLMotionProps<"cite"> & Css;
export type CodeProps = HTMLMotionProps<"code"> & Css;

export type ColProps = HTMLMotionProps<"col"> & Css;

export type ColgroupProps = HTMLMotionProps<"colgroup"> &
  Css & {
    children?: ColProps | ColProps[];
  };

export type DatalistProps = HTMLMotionProps<"datalist"> &
  Css & {
    children?: OptionProps | OptionProps[];
  };

export type DdProps = HTMLMotionProps<"dd"> & Css;
export type DelProps = HTMLMotionProps<"del"> & Css;
export type DetailsProps = HTMLMotionProps<"details"> & Css;
export type DfnProps = HTMLMotionProps<"dfn"> & Css;
export type DialogProps = HTMLMotionProps<"dialog"> & Css;
export type DivProps = HTMLMotionProps<"div"> & Css;
export type DlProps = HTMLMotionProps<"dl"> & Css;
export type DtProps = HTMLMotionProps<"dt"> & Css;
export type EmProps = HTMLMotionProps<"em"> & Css;
export type FieldsetProps = HTMLMotionProps<"fieldset"> &
  Css & {
    /**
     * You must provide legend as an aria value becasue of bug in chromium
     * [Issue](https://stackoverflow.com/questions/28078681/why-cant-fieldset-be-flex-containers/46085387#46085387)
     */
    ariaLegend: string;
  };
export type FigcaptionProps = HTMLMotionProps<"figcaption"> & Css;
export type FigureProps = HTMLMotionProps<"figure"> & Css;
export type FooterProps = HTMLMotionProps<"footer"> & Css;
export type FormProps = HTMLMotionProps<"form"> & Css;
export type HeaderProps = HTMLMotionProps<"header"> & Css;
export type H1Props = HTMLMotionProps<"h1"> & Css;
export type H2Props = HTMLMotionProps<"h2"> & Css;
export type H3Props = HTMLMotionProps<"h3"> & Css;
export type H4Props = HTMLMotionProps<"h4"> & Css;
export type H5Props = HTMLMotionProps<"h5"> & Css;
export type H6Props = HTMLMotionProps<"h6"> & Css;
export type HrProps = HTMLMotionProps<"hr"> & Css;
export type IProps = HTMLMotionProps<"i"> & Css;
export type IframeProps = Omit<HTMLMotionProps<"iframe">, "title"> &
  Css & {
    title: string;
  };
export type ImgProps = HTMLMotionProps<"img"> &
  Css & {
    src: string;
  };

export type InputProps = HTMLMotionProps<"input"> & Css;
export type InsProps = HTMLMotionProps<"ins"> & Css;
export type KbdProps = HTMLMotionProps<"kbd"> & Css;
export type LabelProps = HTMLMotionProps<"label"> & Css;
export type LegendProps = Omit<HTMLMotionProps<"span">, "id"> &
  Css & {
    /**
     * Id should be the same as aria-labelledby attribute on fieldset element
     */
    id: string;
  };
export type LiProps = HTMLMotionProps<"li"> &
  Css & {
    listDecoration?: JSX.Element;
  };
export type MainProps = HTMLMotionProps<"main"> & Css;
export type MapProps = HTMLMotionProps<"map"> & Css;
export type MarkProps = HTMLMotionProps<"mark"> & Css;
export type MeterProps = HTMLMotionProps<"meter"> & Css;
export type NavProps = HTMLMotionProps<"nav"> & Css;

export type OlProps = Omit<HTMLMotionProps<"ol">, "children"> &
  Css & {
    children:
      | FunctionComponentElement<LiProps>
      | FunctionComponentElement<LiProps>[];
  };

export type OptgroupProps = HTMLMotionProps<"optgroup"> & Css;
export type OptionProps = HTMLMotionProps<"option"> & Css;
export type PProps = HTMLMotionProps<"p"> & Css;
export type PcitureProps = HTMLMotionProps<"picture"> & Css;
export type PreProps = HTMLMotionProps<"pre"> & Css;
export type ProgressProps = HTMLMotionProps<"progress"> & Css;
export type QProps = HTMLMotionProps<"q"> & Css;
export type SectionProps = HTMLMotionProps<"section"> & Css;

export type SelectProps = Omit<HTMLMotionProps<"select">, "multiple"> &
  Css & {
    icon?: IconTypeElement;
  };

export type SourceProps = Omit<HTMLMotionProps<"source">, "children"> & Css;

export type SpanProps = HTMLMotionProps<"span"> & Css;
export type StrongProps = HTMLMotionProps<"strong"> & Css;
export type SubProps = HTMLMotionProps<"sub"> & Css;
export type SupProps = HTMLMotionProps<"sup"> & Css;
export type SummaryProps = HTMLMotionProps<"summary"> & Css;
export type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "ref" | "xmlns"> &
  Omit<SVGMotionProps<"svg">, "xmlns"> &
  Css;
export type TableProps = HTMLMotionProps<"table"> & Css;

export type TbodyProps = HTMLMotionProps<"tbody"> & Css;

export type TdProps = HTMLMotionProps<"td"> & Css;
export type TextareaProps = HTMLMotionProps<"textarea"> & Css;
export type TfootProps = HTMLMotionProps<"tfoot"> & Css;
export type ThProps = HTMLMotionProps<"th"> & Css;

export type TheadProps = HTMLMotionProps<"thead"> & Css;
export type TimeProps = HTMLMotionProps<"time"> & Css;

export type TrProps = HTMLMotionProps<"tr"> & Css;

export type TrackProps = HTMLMotionProps<"track"> & Css;

export type UProps = HTMLMotionProps<"u"> & Css;
export type UlProps = Omit<HTMLMotionProps<"ul">, "children"> &
  Css & {
    icon?: IconTypeElement;
    children:
      | FunctionComponentElement<LiProps>
      | FunctionComponentElement<LiProps>[];
  };
export type VideoProps = HTMLMotionProps<"video"> & Css;

// ======================================================================================================
// ======================================================================================================
