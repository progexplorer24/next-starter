import svgToMiniDataUri from "mini-svg-data-uri";

/**
 * You should use this function to add SVG to your HTML or CSS ex. background image url("") or img src attribute.
 * @param svgString - svg converted to string
 */
const optimizeSvgString = (svgString: string): string => {
  return `"${svgToMiniDataUri(svgString)}"`;
};

export default optimizeSvgString;
