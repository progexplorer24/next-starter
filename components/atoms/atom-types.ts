import { SerializedStyles } from "@emotion/core";
import { ReactElement, FunctionComponentElement } from "react";

/**
 * --------- Helper Types -----------------------------------------------------
 */

export type EmotionProps = {
  css?: SerializedStyles;
  className?: string;
  __EMOTION_TYPE_PLEASE_DO_NOT_USE__?: (props: EmotionProps) => ReactElement;
};

type CustomSvgElement = SVGSVGElement & {
  css?: SerializedStyles;
};

export type IconTypeElement = ReactElement<
  CustomSvgElement,
  (props: SVGSVGElement) => ReactElement
>;

type Css = {
  css?: SerializedStyles;
};

type CssProp = {
  cssProp?: SerializedStyles;
};

// ======================================
// ======================================

/**
 * --- ATOM ELEMENTS ------
 * This section includes all typings for atom elements
 */

export type StandardHtmlComponent = React.HTMLAttributes<HTMLElement> & CssProp;
export type AProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & CssProp;
export type AddressProps = StandardHtmlComponent;

export type AreaProps = Omit<
  React.AreaHTMLAttributes<HTMLAreaElement>,
  "alt" | "children"
> &
  CssProp & {
    alt: string;
  };

export type AbbrProps = StandardHtmlComponent;
export type ArticleProps = StandardHtmlComponent;
export type AsideProps = StandardHtmlComponent;
export type AudioProps = React.AudioHTMLAttributes<HTMLAudioElement> & CssProp;

export type BlockquoteProps = Omit<
  React.BlockquoteHTMLAttributes<HTMLElement>,
  "children"
> &
  CssProp & {
    children: ReactElement<Css>;
  };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CssProp;
export type CanvasProps = React.CanvasHTMLAttributes<HTMLCanvasElement> &
  CssProp;
export type CaptionProps = StandardHtmlComponent;
export type CiteProps = StandardHtmlComponent;
export type CodeProps = StandardHtmlComponent;

export type ColProps = Omit<
  React.ColHTMLAttributes<HTMLTableColElement>,
  "children"
> &
  CssProp;

export type ColgroupProps = Omit<
  React.ColgroupHTMLAttributes<HTMLTableColElement>,
  "children"
> &
  CssProp & {
    children?: ColProps | ColProps[];
  };

export type DatalistProps = Omit<StandardHtmlComponent, "children"> &
  CssProp & {
    children?: OptionProps | OptionProps[];
  };

export type DdProps = StandardHtmlComponent;
export type DelProps = React.DelHTMLAttributes<HTMLElement> & CssProp;
export type DetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement> &
  CssProp;
export type DfnProps = StandardHtmlComponent;
export type DialogProps = React.DialogHTMLAttributes<HTMLDialogElement> &
  CssProp;
export type DivProps = StandardHtmlComponent;
export type DlProps = Omit<StandardHtmlComponent, "children"> & {
  children?: DdProps | DtProps | (DdProps | DtProps)[];
};
export type DtProps = StandardHtmlComponent;
export type EmProps = StandardHtmlComponent;
export type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> &
  CssProp;
export type FigcaptionProps = StandardHtmlComponent;
export type FigureProps = StandardHtmlComponent;
export type FooterProps = StandardHtmlComponent;
export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & CssProp;
export type HeaderProps = StandardHtmlComponent;
export type HeadingProps = StandardHtmlComponent;
export type HrProps = Omit<StandardHtmlComponent, "children">;
export type IframeProps = React.IframeHTMLAttributes<HTMLIFrameElement> &
  CssProp;
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> &
  CssProp & {
    src: string;
  };

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & CssProp;
export type InsProps = React.InsHTMLAttributes<HTMLElement> & CssProp;
export type KbdProps = StandardHtmlComponent;
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & CssProp;
export type LegendProps = StandardHtmlComponent;
export type LiProps = React.LiHTMLAttributes<HTMLLIElement> &
  CssProp & {
    listDecoration?: JSX.Element;
  };
export type MainProps = StandardHtmlComponent;
export type MapProps = React.MapHTMLAttributes<HTMLMapElement> & CssProp;
export type MarkProps = StandardHtmlComponent;
export type MeterProps = React.MeterHTMLAttributes<HTMLMeterElement> & CssProp;
export type NavProps = StandardHtmlComponent;

export type OlProps = Omit<
  React.OlHTMLAttributes<HTMLOListElement>,
  "children"
> &
  CssProp & {
    children:
      | FunctionComponentElement<LiProps>
      | FunctionComponentElement<LiProps>[];
  };

export type OptgroupProps = React.OptgroupHTMLAttributes<HTMLOptionElement> &
  CssProp;
export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> &
  CssProp;
export type ParagraphProps = StandardHtmlComponent;
export type PcitureProps = StandardHtmlComponent;
export type PreProps = StandardHtmlComponent;
export type ProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement> &
  CssProp;
export type QProps = React.QuoteHTMLAttributes<HTMLQuoteElement> & CssProp;
export type SectionProps = StandardHtmlComponent;

export type SourceProps = Omit<
  React.SourceHTMLAttributes<HTMLSourceElement>,
  "children"
> &
  CssProp;

export type SpanProps = StandardHtmlComponent;
export type StrongProps = StandardHtmlComponent;
export type SubProps = StandardHtmlComponent;
export type SupProps = StandardHtmlComponent;
export type SummaryProps = StandardHtmlComponent;
export type SvgProps = React.SVGProps<SVGSVGElement> & CssProp;
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

export type TbodyProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  children?:
    | ReactElement<TrProps, (props: TrProps) => ReactElement>
    | ReactElement<TrProps, (props: TrProps) => ReactElement>[];
};

export type TdProps = React.TdHTMLAttributes<HTMLTableDataCellElement> &
  CssProp;
export type TfootProps = StandardHtmlComponent;
export type ThProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  CssProp;

export type TheadProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  children?:
    | ReactElement<TrProps, (props: TrProps) => ReactElement>
    | ReactElement<TrProps, (props: TrProps) => ReactElement>[];
};
export type TimeProps = React.TimeHTMLAttributes<HTMLTimeElement> & CssProp;

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

export type TrackProps = Omit<
  React.TrackHTMLAttributes<HTMLTrackElement>,
  "children"
> &
  CssProp;

export type UProps = StandardHtmlComponent;
export type UlProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  icon?: IconTypeElement;
  children:
    | FunctionComponentElement<LiProps>
    | FunctionComponentElement<LiProps>[];
};
export type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & CssProp;

// ======================================================================================================
// ======================================================================================================
