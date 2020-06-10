import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
import { v4 as uuid } from "uuid";
import { toPairs } from "ramda";
import { defaultFontClasses } from "data";

type TailwindFontSizesProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const TailwindFontSizes: FC<TailwindFontSizesProps> = ({
  children,
  ...props
}) => {
  const pairKeysAndValues = toPairs(defaultFontClasses);
  type Truncate = "text-4xl" | "text-5xl" | "text-6xl";
  const truncate = new Set<Truncate>(["text-4xl", "text-5xl", "text-6xl"]);
  const renderFontSizes = (arr: typeof pairKeysAndValues): JSX.Element => (
    <>
      {arr.map(([key, { twClass }]) => (
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
          <p
            css={css`
              ${twClass}
              ${truncate.has(key as Truncate) ? tw`truncate` : undefined}
            `}
          >
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      ))}
    </>
  );
  return (
    <div
      css={css`
        ${tw`p-2 mb-6 bg-gray-100 border border-gray-400 rounded-lg shadow-lg `}
      `}
      {...props}
    >
      {renderFontSizes(pairKeysAndValues)}
    </div>
  );
};

export default TailwindFontSizes;
