import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import colors from "@design/design-tokens/colors";
import Hr from "./atoms/hr/hr";
import type { TextHRProps } from "./types";

const TextHr = ({ dataContent, ...props }: TextHRProps): ReactElement => {
  const createFadingEffect = emotionCss`
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
  `;

  return (
    <Hr
      css={emotionCss([
        tw`relative h-6 my-16 text-center border-0 outline-none `,
        createFadingEffect,
      ])}
      {...props}
      data-content={dataContent ?? ""}
    />
  );
};

export default TextHr;
