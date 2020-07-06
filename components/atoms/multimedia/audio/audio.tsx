import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AudioProps } from "@components/atoms/atom-types";

const Audio = ({ children, css, ...props }: AudioProps): ReactElement => {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio {...props} css={emotionCss([css])}>
      {children}
    </audio>
  );
};
export default Audio;
