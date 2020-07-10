import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const SuccessIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg {...props} css={emotionCss([css])}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.43005 13.44L19.77 2.10001L24 6.33L8.43005 21.9L0 13.47L4.22998 9.24001L8.43005 13.44ZM21.1699 6.33L19.7699 4.93001L8.42993 16.27L4.22998 12.07L2.82996 13.47L8.42993 19.07L21.1699 6.33Z"
      />
    </Svg>
  );
};
export default SuccessIcon;
