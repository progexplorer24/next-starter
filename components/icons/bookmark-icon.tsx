import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const BookmarkIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="bookmark_24px">
        <path id="icon/action/bookmark_24px" d="M19 3H5V21L12 18L19 21V3Z" />
      </g>
    </Svg>
  );
};
export default BookmarkIcon;
