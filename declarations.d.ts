declare module "*.svg" {
  import React, { ReactElement } from "react";

  export const ReactComponent: (
    props: unknown
  ) => ReactElement<SVGSVGElement, (props: SVGSVGElement) => ReactElement>;
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
