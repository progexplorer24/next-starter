import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import Svg from "@components/atoms/svg/svg";
import type { SvgProps } from "@components/atoms/atom-types";

const DeleteIcon = ({ css, ...props }: SvgProps): ReactElement => {
  return (
    <Svg css={emotionCss([css])} {...props}>
      <g id="delete_24px">
        <path
          id="icon/action/delete_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM18 21H6V7H18V21Z"
        />
      </g>
    </Svg>
  );
};
export default DeleteIcon;
