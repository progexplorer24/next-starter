import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const SendIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="send_24px">
        <path
          id="icon/content/send_24px"
          d="M1.51 21L22.5 12L1.51 3L1.5 10L16.5 12L1.5 14L1.51 21Z"
        />
      </g>
    </Svg>
  );
};
export default SendIcon;
