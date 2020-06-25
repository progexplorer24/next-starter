import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "@utils/emotion-clone";
import Alert, { AlertProps, IconTypeElement } from "../alert";
import InfoIcon from "../info.svg";

const AlertInfo = ({
  children,
  css,
  outlined,
  icon = <InfoIcon />,
  ...props
}: AlertProps): ReactElement => {
  const styledIcon = cloneEmotion(icon, {
    css: emotionCss([icon.props.css, tw`text-blue-600 fill-current`]),
  }) as IconTypeElement;

  const outlinedStyles = outlined
    ? tw`bg-transparent border border-blue-400`
    : undefined;

  return (
    <Alert
      {...props}
      icon={styledIcon}
      css={emotionCss([tw`text-blue-900 bg-blue-200`, outlinedStyles])}
    >
      {children}
    </Alert>
  );
};
export default AlertInfo;
