import React from "react";
import { css, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";
import colors from "@design/design-tokens/colors";

export type TextHRProps = {
  text?: string;
  css?: SerializedStyles;
};

const TextHR: React.FC<TextHRProps> = ({ text, ...props }) => {
  return (
    <hr
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
