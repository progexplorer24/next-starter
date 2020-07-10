// types/mdx.d.ts
declare module "*.mdx" {
  const MDXComponent: <T1>(props: T1) => JSX.Element;
  export default MDXComponent;
}

declare module "mini-svg-data-uri" {
  export const svgToMiniDataUri: (svgString: string) => string;
  export default svgToMiniDataUri;
}
