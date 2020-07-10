import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const UploadIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <g id="backup_24px">
        <path
          id="icon/action/backup_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4ZM14 17V13H17L12 8L7 13H10V17H14Z"
        />
      </g>
    </Svg>
  );
};
export default UploadIcon;
