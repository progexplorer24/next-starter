import React, { ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";
import { TwStyle } from "twin.macro";
import { v4 as uuid } from "uuid";
import { toPairs } from "ramda";
import Board from "@components/docs/board/board";
import Example from "../example/example";

type RenderExamplesProps = {
  css?: SerializedStyles;
  data: {
    [key: string]: {
      value: string;
      twClass: TwStyle;
    };
  };
};

const RenderExamples = ({
  data = {},
  ...props
}: RenderExamplesProps): ReactElement => {
  const pairKeysAndValues = toPairs(data);

  const renderExamples = (arr: typeof pairKeysAndValues): JSX.Element => (
    <>
      {arr.map(([key, { twClass }]) => {
        return <Example key={uuid()} twClass={twClass} classKey={key} />;
      })}
    </>
  );
  return <Board {...props}>{renderExamples(pairKeysAndValues)}</Board>;
};

export default RenderExamples;

// return (
//   <div
//     css={css`
//       ${tw`px-2 mt-4`}
//     `}
//     key={uuid()}
//   >
//     <span
//       css={css`
//         ${tw`text-sm font-bold text-gray-600 `}
//       `}
//     >
//       .{key}
//     </span>
//     <Text
//       css={css`
//         ${twClass}
//         ${shouldTruncate(fontSize) ? tw`truncate` : undefined}
//       `}
//     />
//   </div>
// );
