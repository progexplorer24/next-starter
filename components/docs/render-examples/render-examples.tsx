import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import { v4 as uuid } from "uuid";
import { toPairs } from "ramda";
import Board from "@components/docs/board/board";
import Example from "../example/example";

type ExampleChildProps = { css?: SerializedStyles };

type RenderExamplesProps = {
  css?: SerializedStyles;
  className?: string;
  data: {
    [key: string]: {
      value: string;
      twClass: TwStyle;
    };
  };
  boardCss?: SerializedStyles;
  exampleChild: ReactElement<
    ExampleChildProps,
    (props: ExampleChildProps) => ReactElement
  >;
};

const RenderExamples = ({
  data = {},
  exampleChild,
  boardCss,

  ...props
}: RenderExamplesProps): ReactElement => {
  const pairKeysAndValues = toPairs(data);

  const renderExamples = (arr: typeof pairKeysAndValues): JSX.Element => (
    <>
      {arr.map(([key, { twClass }]) => {
        return (
          <Example key={uuid()} classKey={key} twClass={twClass}>
            {exampleChild}
          </Example>
        );
      })}
    </>
  );
  return (
    <Board css={emotionCss([tw`space-y-4`, boardCss])} {...props}>
      {renderExamples(pairKeysAndValues)}
    </Board>
  );
};

export default RenderExamples;
