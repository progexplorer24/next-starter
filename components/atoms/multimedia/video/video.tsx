import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { VideoProps } from "@components/atoms/atom-types";

const Video = ({ children, css, ...props }: VideoProps): ReactElement => {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video {...props} css={emotionCss([css])}>
      {children}
    </video>
  );
};
export default Video;
