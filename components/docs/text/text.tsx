import React, { FC } from "react";
import { SerializedStyles } from "@emotion/core";

type TextProps = {
  css?: SerializedStyles;
  text?: string;
};

const defaultText = `The quick brown fox jumped over the lazy dog.`;

const Text: FC<TextProps> = ({ text = defaultText, ...props }) => {
  return <p {...props}>{text}</p>;
};

export default Text;
