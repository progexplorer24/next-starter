import React from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import { v4 as uuid } from "uuid";
import { map, toPairs } from "ramda";
import tw, { TwStyle } from "twin.macro";
import H4 from "@components/basic/h4/h4";
import { colors } from "data";
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
      <div key={uuid()} css={emotionCss([tw`sm:flex sm:items-center `])}>
        <ColorCircle css={emotionCss([tw`bg-red-100 sm:mx-0`, twClass])} />
        <div
          css={emotionCss`
            ${tw`mt-2 sm:pl-3 sm:mt-2`}
          `}
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
            <H4 css={emotionCss([tw`capitalize`])}>{color}</H4>
            {isBlackOrWhite(color) ? undefined : (
              <div
                css={emotionCss([
                  tw`h-40 mt-4 rounded-full w-14 sm:w-40 sm:h-16`,
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
