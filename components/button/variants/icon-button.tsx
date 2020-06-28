import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomButton from "@components/atoms/button/button";
import emotionClone from "@utils/emotion-clone";
import { IconTypeElement } from "@components/alert/alert";

type IconButtonProps = {
  css?: SerializedStyles;
  className?: string;
  label: string;
  children: IconTypeElement;
};

const IconButton = ({
  children,
  css,
  label,
  ...props
}: IconButtonProps): ReactElement => {
  const iconStyled = emotionClone(children, {
    css: emotionCss([
      tw`w-6 h-6 text-gray-700 fill-current`,
      children.props.css,
    ]),
  });

  return (
    <AtomButton
      {...props}
      css={emotionCss([
        tw`inline-flex items-center justify-center rounded-full w-11 h-11`,
        css,
      ])}
      aria-label={label}
    >
      {iconStyled}
    </AtomButton>
  );
};
export default IconButton;
