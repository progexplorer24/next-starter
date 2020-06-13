import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import Text from "../text/text";

type ExampleProps = {
  css?: SerializedStyles;
  classKey: string;
  twClass: TwStyle;
};

const Example: FC<ExampleProps> = ({ classKey, twClass, ...props }) => {
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
      <Text />
    </div>
  );
};

export default Example;
