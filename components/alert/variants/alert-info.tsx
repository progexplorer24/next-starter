import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import { cond, equals, always, T } from "ramda";
import type {
  AlertStyles,
  AlertProps,
  IconTypeElement,
} from "@components/types";
import Alert from "../alert";
import InfoIcon from "../info.svg";

const AlertInfo = ({
  children,
  cssProp,
  type = "default",
  icon = <InfoIcon />,
  ...props
}: AlertProps): ReactElement => {
  const { iconStyles, alertStyles } = cond<string, AlertStyles>([
    [
      equals("filled"),
      always({
        iconStyles: undefined,
        alertStyles: tw`bg-blue-600`,
      }),
    ],
    [
      equals("outlined"),
      always({
        iconStyles: tw`text-blue-600`,
        alertStyles: tw`text-blue-800 border-blue-600`,
      }),
    ],
    [
      T,
      always({
        iconStyles: tw`text-blue-600`,
        alertStyles: tw`text-blue-800 bg-blue-200`,
      }),
    ],
  ])(type);

  const styledIcon = icon
    ? (cloneEmotion(icon, {
        ...icon.props,
        css: emotionCss([iconStyles, icon.props.css]),
      }) as IconTypeElement)
    : false;

  return (
    <Alert
      {...props}
      icon={styledIcon}
      type={type}
      css={emotionCss([alertStyles, cssProp])}
    >
      {children}
    </Alert>
  );
};
export default AlertInfo;
