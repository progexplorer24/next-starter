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
  children: ReactNode;
};

const Alert = ({
  children,
  css,
  icon = <InfoIcon />,
  outlined,
  ...props
}: AlertProps): ReactElement => {
  const iconStyled = cloneEmotion(icon, {
    css: emotionCss([tw`w-5 h-5 mt-1`, icon.props.css]),
  });

  const outlinedStyles = outlined
    ? tw`bg-transparent border border-gray-400`
    : undefined;

  return (
    <div
      role="alert"
      {...props}
      css={emotionCss([
        tw`flex w-full px-4 py-3 mt-4 bg-gray-300 rounded-md`,
        outlinedStyles,
        css,
      ])}
    >
      <div css={emotionCss([tw`mr-3`])}>{iconStyled}</div>

      <div>{children}</div>
    </div>
  );
};
export default Alert;
