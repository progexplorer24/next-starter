import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import AtomUl, { UlProps } from "@components/atoms/lists/ul/ul";
import RightArrow from "./right-arrow.svg";

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
    <AtomUl css={emotionCss([tw`mt-6`, css])} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          listDecoration: iconWithStyles,
          css: emotionCss([tw`relative pl-7`]),
        })
      )}
    </AtomUl>
  );
};

export default Ul;
