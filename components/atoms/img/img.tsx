import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

export type ImgProps = {
  css?: SerializedStyles;
  className?: string;
  alt: string;
  src: string;
};

const Img = ({ alt = "", src, css, ...props }: ImgProps): ReactElement => {
  return <img alt={alt} src={src} css={emotionCss([css])} {...props} />;
};

export default Img;
