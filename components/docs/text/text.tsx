import React, { ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

export type TextProps = {
  css?: SerializedStyles;
  text?: string;
};

const defaultText = `The quick brown fox jumped over the lazy dog.`;

const Text = ({ text = defaultText, ...props }: TextProps): ReactElement => {
  return (
    <p
      css={css`
        ${tw`truncate`}
      `}
      {...props}
    >
      {text}
    </p>
  );
};

export default Text;
