import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import RightArrow from "./right-arrow.svg";
import type { LiProps } from "../li/li";

export type UlProps = {
  css?: SerializedStyles;
  className?: string;
  icon?: ReactElement;
  children:
    | ReactElement<LiProps, (props: LiProps) => ReactElement>
    | ReactElement<LiProps, (props: LiProps) => ReactElement>[];
};

const Ul = ({
  children,
  icon = <RightArrow />,
  css,
  ...props
}: UlProps): ReactElement => {
  const iconStyles = emotionCss`
    ${tw`absolute top-0 left-0 w-5 h-5 mt-1 text-gray-600 fill-current`}
  `;

  const iconWithStyles = cloneEmotion(icon, { css: iconStyles });

  return (
    <ul css={emotionCss([tw`mt-6`, css])} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          listDecoration: iconWithStyles,
          css: emotionCss([tw`relative pl-7`]),
        })
      )}
    </ul>
  );
};

export default Ul;
