import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import IconSuccess from "../success.svg";
import Alert, { AlertProps, IconTypeElement } from "../alert";

const AlertSuccess = ({
  children,
  css,
  outlined,
  icon = <IconSuccess />,
  ...props
}: AlertProps): ReactElement => {
  const styledIcon = cloneEmotion(icon, {
    css: emotionCss([tw`mt-0 text-green-700 fill-current`]),
  }) as IconTypeElement;
  const outlinedStyles = outlined
    ? tw`bg-transparent border border-green-400`
    : undefined;
  return (
    <Alert
      {...props}
      icon={styledIcon}
      css={emotionCss([tw`text-green-900 bg-green-200`, outlinedStyles])}
    >
      {children}
    </Alert>
  );
};
export default AlertSuccess;
