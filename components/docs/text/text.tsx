import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type TextProps = {
  css?: SerializedStyles;
  text?: string;
};

const defaultText = `The quick brown fox jumped over the lazy dog.`;

const Text = ({
  text = defaultText,
  css,
  ...props
}: TextProps): ReactElement => {
  return (
    <p css={emotionCss([tw`truncate`, css])} {...props}>
      {text}
    </p>
  );
};

export default Text;
