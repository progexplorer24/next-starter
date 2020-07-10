import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const ErrorIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="error_outline_24px">
        <path
          id="icon/alert/error_outline_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.99 2C6.46997 2 2 6.48001 2 12C2 17.52 6.46997 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48001 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58002 20 12 20C16.42 20 20 16.42 20 12C20 7.57999 16.42 4 12 4C7.58002 4 4 7.57999 4 12Z"
        />
      </g>
    </Svg>
  );
};
export default ErrorIcon;
