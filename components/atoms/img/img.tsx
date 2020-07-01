import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { ImgProps } from "@components/atoms/atom-types";

const Img = ({ alt = "", src, cssProp, ...props }: ImgProps): ReactElement => {
  return <img alt={alt} src={src} css={emotionCss([cssProp])} {...props} />;
};

export default Img;
