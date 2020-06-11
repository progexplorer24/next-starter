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
