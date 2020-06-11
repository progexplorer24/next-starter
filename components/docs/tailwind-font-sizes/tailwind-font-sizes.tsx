import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import { v4 as uuid } from "uuid";
import { toPairs } from "ramda";
import Board from "@components/docs/board/board";
import Text from "../text/text";

type TailwindFontSizesProps = {
  css?: SerializedStyles;
  fonts: {
    [key: string]: {
      value: string;
      twClass: TwStyle;
    };
  };
};

const TailwindFontSizes: FC<TailwindFontSizesProps> = ({
  fonts = {},
  ...props
}) => {
  const pairKeysAndValues = toPairs(fonts);

  const renderFontSizes = (arr: typeof pairKeysAndValues): JSX.Element => (
    <>
      {arr.map(([key, { twClass, value }]) => {
        // Set default truncate size for examples to 2rem
        const TRUNCATE_GRATER_THAN = 2;

        /**
        |--------------------------------------------------
        | Find font size inside a Regular Expression or assign zero if no match was found
          
        |--------------------------------------------------
        */
        const fontSize =
          Number(/(?<=font-size: )(.*)(?=rem;)/.exec(value)?.[0]) ?? 0;

        const shouldTruncate = (number: number): boolean =>
          number > TRUNCATE_GRATER_THAN;

        return (
          <div
            css={css`
              ${tw`px-2 mt-4`}
            `}
            key={uuid()}
          >
            <span
              css={css`
                ${tw`text-sm font-bold text-gray-600 `}
              `}
            >
              .{key}
            </span>
            <Text
              css={css`
                ${twClass}
                ${shouldTruncate(fontSize) ? tw`truncate` : undefined}
              `}
            />
          </div>
        );
      })}
    </>
  );
  return <Board {...props}>{renderFontSizes(pairKeysAndValues)}</Board>;
};

export default TailwindFontSizes;
