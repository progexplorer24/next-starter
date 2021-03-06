import React, { ReactElement, cloneElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { cond, equals, always, T } from "ramda";
import type { AlertProps, AlertStyles } from "@components/types";
import Alert from "../alert";
import InfoIcon from "../../icons/info-icon";

const AlertInfo = ({
  children,
  css,
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
      css={emotionCss([alertStyles, css])}
    >
      {children}
    </Alert>
  );
};
export default AlertInfo;
