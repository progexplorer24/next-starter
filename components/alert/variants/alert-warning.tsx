import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import { cond, equals, always, T } from "ramda";
import type { IconTypeElement } from "@components/atoms/atom-types";
import type { AlertProps, AlertStyles } from "@components/types";
import Alert from "../alert";
import WarningIcon from "../warning.svg";

const AlertWarning = ({
  children,
  icon = <WarningIcon />,
  type = "default",
  css,
  ...props
}: AlertProps): ReactElement => {
  const { iconStyles, alertStyles } = cond<string, AlertStyles>([
    [
      equals("filled"),
      always({
        iconStyles: undefined,
        alertStyles: tw`bg-orange-600`,
      }),
    ],
    [
      equals("outlined"),
      always({
        iconStyles: tw`text-orange-600`,
        alertStyles: tw`text-orange-800 border-orange-600`,
      }),
    ],
    [
      T,
      always({
        iconStyles: tw`text-orange-600`,
        alertStyles: tw`text-orange-900 bg-orange-200`,
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
      type={type}
      css={emotionCss([alertStyles, css])}
      icon={styledIcon}
    >
      {children}
    </Alert>
  );
};
export default AlertWarning;
