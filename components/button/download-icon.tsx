import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const DownloadIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="download_24px">
        <path
          id="icon/file/download_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 9.5H19L12 16.5L5 9.5H9V3.5H15V9.5ZM5 20.5V18.5H19V20.5H5Z"
        />
      </g>
    </Svg>
  );
};
export default DownloadIcon;
