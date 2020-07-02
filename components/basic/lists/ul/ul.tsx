import React, { ReactElement, cloneElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomUl from "@components/atoms/text-content/ul/ul";
import type { UlProps } from "@components/atoms/atom-types";
import emotionClone from "@utils/emotion-clone";
import RightArrow from "./right-arrow.svg";

const Ul = ({
  children,
  icon = <RightArrow />,
  cssProp,
  ...props
}: UlProps): ReactElement => {
  const iconStyles = emotionCss`
    ${tw`absolute top-0 left-0 w-5 h-5 mt-1 text-gray-600 fill-current`}
  `;

  const iconWithStyles = emotionClone(icon, {
    ...icon.props,
    css: iconStyles,
  });

  return (
    <AtomUl css={emotionCss([tw`mt-6`, cssProp])} {...props}>
      {React.Children.map(children, (child) =>
        cloneElement(child, {
          cssProp: emotionCss([tw`relative pl-7`]),
          listDecoration: iconWithStyles,
        })
      )}
    </AtomUl>
  );
};

export default Ul;
