import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import { cond, T, always, equals } from "ramda";
import type { IconTypeElement } from "@components/atoms/atom-types";
import type { AlertProps, AlertStyles } from "@components/types";
import InfoIcon from "./info.svg";

const Alert = ({
  children,
  cssProp,
  icon = <InfoIcon />,
  type = "default",
  ...props
}: AlertProps): ReactElement => {
  const { iconStyles, alertStyles } = cond<string, AlertStyles>([
    [
      equals("filled"),
      always({
        iconStyles: tw`text-white fill-current`,
        alertStyles: tw`font-bold text-white bg-gray-600`,
      }),
    ],
    [
      equals("outlined"),
      always({
        iconStyles: tw`text-gray-700`,
        alertStyles: tw`bg-gray-100 border border-gray-600`,
      }),
    ],
    [
      T,
      always({
        iconStyles: tw`text-gray-700`,
        alertStyles: tw`bg-gray-300`,
      }),
    ],
  ])(type);

  const renderIcon = (iconElement: IconTypeElement) => {
    const iconStyled = cloneEmotion(iconElement, {
      ...iconElement.props,
      css: emotionCss([
        tw`w-5 h-5 fill-current`,
        iconStyles,
        iconElement.props.css,
      ]),
    });

    return <div css={emotionCss([tw`mr-3`])}>{iconStyled}</div>;
  };

  return (
    <div
      role="alert"
      {...props}
      css={emotionCss([
        tw`flex w-full px-4 py-3 mt-4 rounded-md`,
        alertStyles,
        cssProp,
      ])}
    >
      {icon ? renderIcon(icon) : undefined}

      <div css={emotionCss([tw`leading-tight`])}>{children}</div>
    </div>
  );
};
export default Alert;
