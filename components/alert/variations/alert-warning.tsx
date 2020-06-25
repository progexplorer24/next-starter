import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import Alert, { AlertProps, IconTypeElement } from "../alert";
import WarningIcon from "../warning.svg";

const AlertWarning = ({
  children,
  icon = <WarningIcon />,
  css,
  outlined,
  ...props
}: AlertProps): ReactElement => {
  const styledIcon = cloneEmotion(icon, {
    css: emotionCss([tw`mt-0 text-orange-600 fill-current`]),
  }) as IconTypeElement;

  const outlinedStyles = outlined
    ? tw`bg-transparent border border-orange-400`
    : undefined;

  return (
    <Alert
      {...props}
      css={emotionCss([tw`text-orange-900 bg-orange-200`, outlinedStyles])}
      icon={styledIcon}
    >
      {children}
    </Alert>
  );
};
export default AlertWarning;
