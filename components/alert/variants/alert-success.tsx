import React, { ReactElement, cloneElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { cond, equals, always, T } from "ramda";
import type { AlertProps, AlertStyles } from "@components/types";
import Alert from "../alert";
import SuccessIcon from "../../icons/success-icon";

const AlertSuccess = ({
  children,
  css,
  icon = <SuccessIcon />,
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
    ? cloneElement(icon, {
        ...icon.props,
        css: emotionCss([iconStyles, icon.props.css]),
      })
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
