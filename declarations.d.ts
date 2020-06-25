declare module "*.svg" {
  import React from "react";

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export const src: string;
  export default ReactComponent;
}

// types/mdx.d.ts
declare module "*.mdx" {
  const MDXComponent: <T1>(props: T1) => JSX.Element;
  export default MDXComponent;
}

declare module "mini-svg-data-uri" {
  export const svgToMiniDataUri: (svgString: string) => string;
  export default svgToMiniDataUri;
}

declare type EmotionProps = {
  css?: SerializedStyles;
  className?: string;
  __EMOTION_TYPE_PLEASE_DO_NOT_USE__?: (props: EmotionProps) => ReactElement;
};
