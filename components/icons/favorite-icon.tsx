import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const FavoriteIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="favorite_24px">
        <path
          id="icon/action/favorite_24px"
          d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.32495C2 5.24495 4.42 2.82495 7.5 2.82495C9.24 2.82495 10.91 3.63495 12 4.91495C13.09 3.63495 14.76 2.82495 16.5 2.82495C19.58 2.82495 22 5.24495 22 8.32495C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z"
        />
      </g>
    </Svg>
  );
};
export default FavoriteIcon;
