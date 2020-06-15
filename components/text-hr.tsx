import React, { ReactElement } from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";
import colors from "@design/design-tokens/colors";
import HR, { HRProps } from "./atoms/hr/hr";

export type TextHRProps = HRProps & {
  text?: string;
};

const TextHR = ({ text, ...props }: TextHRProps): ReactElement => {
  return (
    <HR
      css={css`
        ${tw`relative h-6 my-16 text-center border-0 outline-none `}
        &:before {
          content: "";
          background: linear-gradient(
            to right,
            transparent,
            ${colors.gray[500]},
            transparent
          );
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
        }
        &:after {
          content: attr(data-content);
          ${tw`relative inline-block px-2 py-0 leading-normal text-gray-600 bg-gray-100`}
        }
      `}
      {...props}
      data-content={text || ""}
    />
  );
};

export default TextHR;
