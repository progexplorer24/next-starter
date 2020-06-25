import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import Alert, { AlertProps, IconTypeElement } from "../alert";
import ErrorIcon from "../error.svg";

const AlertError = ({
  children,
  icon = <ErrorIcon />,
  css,
  outlined,
  ...props
}: AlertProps): ReactElement => {
  const styledIcon = cloneEmotion(icon, {
    css: emotionCss([tw`mt-0 text-red-600 fill-current`]),
  }) as IconTypeElement;
  const outlinedStyles = outlined
    ? tw`bg-transparent border border-red-500`
    : undefined;
  return (
    <Alert
      icon={styledIcon}
      {...props}
      css={emotionCss([tw`text-red-900 bg-red-200`, outlinedStyles])}
    >
      {children}
    </Alert>
  );
};
export default AlertError;
