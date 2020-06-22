import { ReactElement, cloneElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import optimizeSvgString from "./optimize-svg-string";

type IconProps = {
  fill?: string;
};

/**
 * This function adds fill color to svg element
 * @param svgIcon
 * @param color
 *
 * Example: addFillColorToSvg(svg, `#FFFFFF`) - will add white color to svg element
 */
const addFillColorToSvg = (
  svgIcon: ReactElement<IconProps, (props: IconProps) => ReactElement>,
  color: string
): string => {
  const coloredSvg = cloneElement(svgIcon, { fill: color });
  const svgString = renderToStaticMarkup(coloredSvg);
  const optimizedSvg = optimizeSvgString(svgString);

  return optimizedSvg;
};

export default addFillColorToSvg;
