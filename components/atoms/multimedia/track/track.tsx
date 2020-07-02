import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TrackProps } from "@components/atoms/atom-types";

const Track = ({ cssProp, ...props }: TrackProps): ReactElement => {
  return <track {...props} css={emotionCss([cssProp])} />;
};
export default Track;
