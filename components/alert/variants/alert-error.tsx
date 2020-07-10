import React, { ReactElement, cloneElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { equals, always, T, cond } from "ramda";
import type { AlertProps, AlertStyles } from "@components/types";
import Alert from "../alert";
import ErrorIcon from "../error-icon";

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
    ? cloneElement(icon, {
        ...icon.props,
        css: emotionCss([iconStyles]),
      })
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
