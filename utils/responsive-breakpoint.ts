import { css, SerializedStyles } from "@emotion/core";
import { TwStyle } from "twin.macro";
/**
 *
 * @param breakpoint number in pixels where set min-width of a break point
 * @param styles pass here emotion css prop or tailwind macro styles
 *
 * Example: breakpoint(300)(tw`bg-purple-400`) - It will add a purple background to the element at 300px breakpoint and higher.
 */

const responsiveBreakpoint = (breakpoint: number) => (
  styles: SerializedStyles | TwStyle
): SerializedStyles => css`
  @media (min-width: ${breakpoint}px) {
    ${styles}
  }
`;

export default responsiveBreakpoint;
