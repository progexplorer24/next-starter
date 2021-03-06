import React from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import { v4 as uuid } from "uuid";
import { map, toPairs } from "ramda";
import tw, { TwStyle } from "twin.macro";

import { colors } from "data";
import responsiveBreakpoint from "utils/responsive-breakpoint";
import H2 from "@components/basic/h2/h2";
import ColorCircle from "../color-circle/color-circle";

type RenderColorPaletteProps = {
  css?: SerializedStyles;
  className?: string;
};

const isBlackOrWhite = (color: string) =>
  color === "black" || color === "white";

const RenderColorPalette = ({
  css,
  ...props
}: RenderColorPaletteProps): JSX.Element => {
  type KeyValuePairs = [
    string,
    {
      [key: string]: {
        value: string;
        twClass: TwStyle;
      };
    }
  ][];
  const headingObjectPairs: KeyValuePairs = toPairs(colors);

  const renderShades = ([shade, { twClass, value }]: [
    string,
    { value: string; twClass: TwStyle }
  ]) => {
    return (
      <div
        key={uuid()}
        css={emotionCss([responsiveBreakpoint(400)(tw`flex items-center`)])}
      >
        <ColorCircle css={emotionCss([tw`bg-red-100`, twClass])} />
        <div
          css={emotionCss([tw`mt-2`, responsiveBreakpoint(400)(tw`pl-3 mt-2`)])}
        >
          <div
            css={emotionCss([
              tw`text-xs font-bold tracking-wider text-gray-700`,
            ])}
          >
            {shade}
          </div>
          <div css={emotionCss([tw`text-sm tracking-wider text-gray-700`])}>
            {value}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div {...props} css={emotionCss([tw`grid grid-cols-2`, css])}>
      {headingObjectPairs.map(([color, obj]) => (
        <div key={uuid()}>
          <div>
            <H2 css={emotionCss([tw`capitalize`])}>{color}</H2>
            {isBlackOrWhite(color) ? undefined : (
              <div
                css={emotionCss([
                  tw`h-40 mt-4 rounded-full w-14`,
                  responsiveBreakpoint(400)(tw`w-40 h-14`),
                  responsiveBreakpoint(600)(tw`h-16`),
                  obj[400].twClass,
                ])}
              />
            )}
          </div>

          {map(renderShades, toPairs(obj))}
        </div>
      ))}
    </div>
  );
};
export default RenderColorPalette;
