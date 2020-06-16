import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";

export type TextProps = {
  css?: SerializedStyles;
  text?: string;
};

const defaultText = `The quick brown fox jumped over the lazy dog.`;

const Text = ({ text = defaultText, css }: TextProps): ReactElement => {
  return <p css={emotionCss([tw`truncate`, css])}>{text}</p>;
};

export default Text;
