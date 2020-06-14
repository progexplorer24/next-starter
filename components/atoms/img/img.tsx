import React, { FC } from "react";
import { SerializedStyles } from "@emotion/core";

export type ImgProps = {
  css?: SerializedStyles;
  alt: string;
  src: string;
};

const Img: FC<ImgProps> = ({ alt = "", src, ...props }) => {
  return <img alt={alt} src={src} {...props} />;
};

export default Img;
