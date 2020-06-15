import React, { ReactElement } from "react";
import { SerializedStyles } from "@emotion/core";

export type ImgProps = {
  css?: SerializedStyles;
  alt: string;
  src: string;
};

const Img = ({ alt = "", src, ...props }: ImgProps): ReactElement => {
  return <img alt={alt} src={src} {...props} />;
};

export default Img;
