import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "utils/emotion-clone";
import RightArrow from "./right-arrow.svg";

export type UlProps = {
  css?: SerializedStyles;
  className?: string;
  icon?: JSX.Element;
  children: JSX.Element[];
};

const Ul = ({
  children,
  icon = <RightArrow />,
  css,
  ...props
}: UlProps): ReactElement => {
  const iconStyles = emotionCss`
    ${tw`inline-flex w-5 h-5 mr-2 text-gray-600 fill-current`}
  `;

  const iconWithStyles = cloneEmotion(icon, { css: iconStyles });

  return (
    <ul css={emotionCss([tw`mt-6`, css])} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { listDecoration: iconWithStyles })
      )}
    </ul>
  );
};

export default Ul;
