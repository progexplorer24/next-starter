import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const VolumeOffIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="volume_off_24px">
        <path
          id="icon/av/volume_off_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.93018 4.34506L4.34018 2.93506L21.0702 19.6551L19.6602 21.0651L17.6102 19.0151C16.5702 19.8451 15.3402 20.4651 14.0002 20.7651V18.7051C14.8002 18.4751 15.5302 18.0851 16.1802 17.5951L12.0002 13.4151V20.0051L7.00018 15.0051H3.00018V9.00506H7.00018L7.29018 8.70506L2.93018 4.34506ZM18.5902 14.3451C18.8502 13.6151 19.0002 12.8251 19.0002 12.0051C19.0002 8.83506 16.8902 6.15506 14.0002 5.29506V3.23506C18.0102 4.14506 21.0002 7.72506 21.0002 12.0051C21.0002 13.3951 20.6802 14.7051 20.1202 15.8751L18.5902 14.3451ZM12.0002 4.00506L10.1202 5.88506L12.0002 7.76506V4.00506ZM14.0002 7.97506C15.4802 8.71506 16.5002 10.2351 16.5002 12.0051C16.5002 12.0851 16.4902 12.1651 16.4802 12.2451L14.0002 9.76506V7.97506Z"
        />
      </g>
    </Svg>
  );
};
export default VolumeOffIcon;
