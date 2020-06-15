import React, { ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import Text from "../text/text";

type ExampleProps = {
  css?: SerializedStyles;
  classKey: string;
  twClass: TwStyle;
};

const Example = ({
  classKey,
  twClass,
  ...props
}: ExampleProps): ReactElement => {
  return (
    <div
      css={css`
        ${tw`px-2 mt-4`}
      `}
      {...props}
    >
      <span
        css={css`
          ${tw`text-sm font-bold text-gray-600 `}
        `}
      >
        .{classKey}
      </span>
      <Text
        css={css`
          ${twClass}
        `}
      />
    </div>
  );
};

export default Example;
