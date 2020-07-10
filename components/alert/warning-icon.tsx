import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const WarningIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="warning_amber_24px">
        <path
          id="icon/alert/warning_amber_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 21.5L12 2.5L23 21.5H1ZM19.53 19.5L12 6.48999L4.46997 19.5H19.53ZM11 16.5V18.5H13V16.5H11ZM11 10.5H13V14.5H11V10.5Z"
        />
      </g>
    </Svg>
  );
};
export default WarningIcon;
