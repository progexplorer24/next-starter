import React, { ReactNode, ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import InfoIcon from "./info.svg";

export type IconTypeElement = ReactElement<
  EmotionProps,
  (props: EmotionProps) => ReactElement
>;

export type AlertProps = EmotionProps & {
  icon?: IconTypeElement;
  outlined?: boolean;
  filled?: boolean;
  children: ReactNode;
};

const Alert = ({
  children,
  css,
  icon = <InfoIcon />,
  outlined,
  filled,
  ...props
}: AlertProps): ReactElement => {
  const filledIcon = filled ? tw`text-white fill-current` : undefined;

  const iconStyled = cloneEmotion(icon, {
    css: emotionCss([tw`w-5 h-5 mt-1`, filledIcon, icon.props.css]),
  });

  const outlinedStyles = outlined
    ? tw`bg-transparent border border-gray-400`
    : undefined;

  const filledStyles = filled
    ? tw`font-bold text-white bg-gray-600 border-none`
    : undefined;

  return (
    <div
      role="alert"
      {...props}
      css={emotionCss([
        tw`flex w-full px-4 py-3 mt-4 bg-gray-300 rounded-md`,
        outlinedStyles,
        filledStyles,
        css,
      ])}
    >
      <div css={emotionCss([tw`mr-3`])}>{iconStyled}</div>

      <div>{children}</div>
    </div>
  );
};
export default Alert;
