import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import { equals, always, T, cond } from "ramda";
import type { IconTypeElement } from "@components/atoms/atom-types";
import type { AlertProps, AlertStyles } from "@components/types";
import Alert from "../alert";
import ErrorIcon from "../error.svg";

const AlertError = ({
  children,
  icon = <ErrorIcon />,
  type = "default",
  css,
  ...props
}: AlertProps): ReactElement => {
  const { iconStyles, alertStyles } = cond<string, AlertStyles>([
    [
      equals("filled"),
      always({
        iconStyles: undefined,
        alertStyles: tw`bg-red-600`,
      }),
    ],
    [
      equals("outlined"),
      always({
        iconStyles: tw`text-red-600`,
        alertStyles: tw`text-red-800 border-red-500`,
      }),
    ],
    [
      T,
      always({
        iconStyles: tw`text-red-600`,
        alertStyles: tw`text-red-900 bg-red-200`,
      }),
    ],
  ])(type);

  const styledIcon = icon
    ? (cloneEmotion(icon, {
        ...icon.props,
        css: emotionCss([iconStyles]),
      }) as IconTypeElement)
    : false;

  return (
    <Alert
      icon={styledIcon}
      type={type}
      {...props}
      css={emotionCss([alertStyles, css])}
    >
      {children}
    </Alert>
  );
};
export default AlertError;
