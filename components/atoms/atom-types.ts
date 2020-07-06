import { SerializedStyles } from "@emotion/core";
import { ReactElement, FunctionComponentElement } from "react";

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
export type AProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & Css;
export type AddressProps = StandardHtmlComponent;

export type AreaProps = Omit<
  React.AreaHTMLAttributes<HTMLAreaElement>,
  "alt" | "children"
> &
  Css & {
    alt: string;
  };

export type AbbrProps = StandardHtmlComponent;
export type ArticleProps = StandardHtmlComponent;
export type AsideProps = StandardHtmlComponent;
export type AudioProps = React.AudioHTMLAttributes<HTMLAudioElement> & Css;

export type BlockquoteProps = Omit<
  React.BlockquoteHTMLAttributes<HTMLElement>,
  "children"
> &
  Css & {
    children: ReactElement<Css>;
  };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Css;
export type CanvasProps = React.CanvasHTMLAttributes<HTMLCanvasElement> & Css;
export type CaptionProps = StandardHtmlComponent;
export type CiteProps = StandardHtmlComponent;
export type CodeProps = StandardHtmlComponent;

export type ColProps = Omit<
  React.ColHTMLAttributes<HTMLTableColElement>,
  "children"
> &
  Css;

export type ColgroupProps = Omit<
  React.ColgroupHTMLAttributes<HTMLTableColElement>,
  "children"
> &
  Css & {
    children?: ColProps | ColProps[];
  };

export type DatalistProps = Omit<StandardHtmlComponent, "children"> &
  Css & {
    children?: OptionProps | OptionProps[];
  };

export type DdProps = StandardHtmlComponent;
export type DelProps = React.DelHTMLAttributes<HTMLElement> & Css;
export type DetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement> &
  Css;
export type DfnProps = StandardHtmlComponent;
export type DialogProps = React.DialogHTMLAttributes<HTMLDialogElement> & Css;
export type DivProps = StandardHtmlComponent;
export type DlProps = Omit<StandardHtmlComponent, "children"> & {
  children?: DdProps | DtProps | (DdProps | DtProps)[];
};
export type DtProps = StandardHtmlComponent;
export type EmProps = StandardHtmlComponent;
export type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> &
  Css & {
    /**
     * You must provide legend as an aria value becasue of bug in chromium
     * [Issue](https://stackoverflow.com/questions/28078681/why-cant-fieldset-be-flex-containers/46085387#46085387)
     */
    ariaLegend: string;
  };
export type FigcaptionProps = StandardHtmlComponent;
export type FigureProps = StandardHtmlComponent;
export type FooterProps = StandardHtmlComponent;
export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & Css;
export type HeaderProps = StandardHtmlComponent;
export type HeadingProps = StandardHtmlComponent;
export type HrProps = Omit<StandardHtmlComponent, "children">;
export type IProps = StandardHtmlComponent;
export type IframeProps = React.IframeHTMLAttributes<HTMLIFrameElement> & Css;
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> &
  Css & {
    src: string;
  };

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Css;
export type InsProps = React.InsHTMLAttributes<HTMLElement> & Css;
export type KbdProps = StandardHtmlComponent;
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & Css;
export type LegendProps = Omit<StandardHtmlComponent, "id"> & {
  /**
   * Id should be the same as aria-labelledby attribute on fieldset element
   */
  id: string;
};
export type LiProps = React.LiHTMLAttributes<HTMLLIElement> &
  Css & {
    listDecoration?: JSX.Element;
  };
export type MainProps = StandardHtmlComponent;
export type MapProps = React.MapHTMLAttributes<HTMLMapElement> & Css;
export type MarkProps = StandardHtmlComponent;
export type MeterProps = React.MeterHTMLAttributes<HTMLMeterElement> & Css;
export type NavProps = StandardHtmlComponent;

export type OlProps = Omit<
  React.OlHTMLAttributes<HTMLOListElement>,
  "children"
> &
  Css & {
    children:
      | FunctionComponentElement<LiProps>
      | FunctionComponentElement<LiProps>[];
  };

export type OptgroupProps = React.OptgroupHTMLAttributes<HTMLOptionElement> &
  Css;
export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & Css;
export type ParagraphProps = StandardHtmlComponent;
export type PcitureProps = StandardHtmlComponent;
export type PreProps = StandardHtmlComponent;
export type ProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement> &
  Css;
export type QProps = React.QuoteHTMLAttributes<HTMLQuoteElement> & Css;
export type SectionProps = StandardHtmlComponent;

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "multiple"
> &
  Css & {
    icon?: IconTypeElement;
  };

export type SourceProps = Omit<
  React.SourceHTMLAttributes<HTMLSourceElement>,
  "children"
> &
  Css;

export type SpanProps = StandardHtmlComponent;
export type StrongProps = StandardHtmlComponent;
export type SubProps = StandardHtmlComponent;
export type SupProps = StandardHtmlComponent;
export type SummaryProps = StandardHtmlComponent;
export type SvgProps = React.SVGProps<SVGSVGElement> & Css;
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

export type TdProps = React.TdHTMLAttributes<HTMLTableDataCellElement> & Css;
export type TfootProps = StandardHtmlComponent;
export type ThProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> & Css;

export type TheadProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  children?:
    | ReactElement<TrProps, (props: TrProps) => ReactElement>
    | ReactElement<TrProps, (props: TrProps) => ReactElement>[];
};
export type TimeProps = React.TimeHTMLAttributes<HTMLTimeElement> & Css;

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
  Css;

export type UProps = StandardHtmlComponent;
export type UlProps = Omit<StandardHtmlComponent, "children"> & {
  cssProp?: SerializedStyles;
  icon?: IconTypeElement;
  children:
    | FunctionComponentElement<LiProps>
    | FunctionComponentElement<LiProps>[];
};
export type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & Css;

// ======================================================================================================
// ======================================================================================================
