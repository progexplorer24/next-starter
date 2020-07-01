import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import { cond, equals, always, T } from "ramda";
import type { IconTypeElement } from "@components/atoms/atom-types";
import type { AlertProps, AlertStyles } from "@components/types";
import IconSuccess from "../success.svg";
import Alert from "../alert";

const AlertSuccess = ({
  children,
  css,
  icon = <IconSuccess />,
  type = "default",
  ...props
}: AlertProps): ReactElement => {
  const { iconStyles, alertStyles } = cond<string, AlertStyles>([
    [
      equals("filled"),
      always({
        iconStyles: undefined,
        alertStyles: tw`bg-green-600`,
      }),
    ],
    [
      equals("outlined"),
      always({
        iconStyles: tw`text-green-600`,
        alertStyles: tw`text-green-800 border-green-500`,
      }),
    ],
    [
      T,
      always({
        iconStyles: tw`text-green-600`,
        alertStyles: tw`text-green-900 bg-green-200`,
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
      css={emotionCss([alertStyles])}
    >
      {children}
    </Alert>
  );
};
export default AlertSuccess;
