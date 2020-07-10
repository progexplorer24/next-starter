import React, {
  ReactElement,
  FunctionComponentElement,
  cloneElement,
} from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { cond, T, always, equals } from "ramda";
import type { AlertProps, AlertStyles } from "@components/types";
import type { SvgProps } from "@components/atoms/atom-types";
import Div from "@components/atoms/text-content/div/div";
import InfoIcon from "../icons/info-icon";

const Alert = ({
  children,
  css,
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

  const renderIcon = (iconElement: FunctionComponentElement<SvgProps>) => {
    const iconStyled = cloneElement(iconElement, {
      ...iconElement.props,
      css: emotionCss([
        tw`w-5 h-5 fill-current`,
        iconStyles,
        iconElement.props.css,
      ]),
    });

    return <Div css={emotionCss([tw`mr-3`])}>{iconStyled}</Div>;
  };

  return (
    <Div
      role="alert"
      {...props}
      css={emotionCss([
        tw`flex w-full px-4 py-3 mt-4 rounded-md`,
        alertStyles,
        css,
      ])}
    >
      {icon ? renderIcon(icon) : undefined}

      <Div css={emotionCss([tw`leading-tight`])}>{children}</Div>
    </Div>
  );
};
export default Alert;
