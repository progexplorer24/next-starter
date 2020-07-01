import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss, ClassNames } from "@emotion/core";
import tw from "twin.macro";
import AtomButton from "@components/atoms/button/button";
import emotionClone from "@utils/emotion-clone";
import { IconTypeElement } from "@components/types";
import { disabledTextButton } from "../styles";

type IconButtonProps = {
  cssProp?: SerializedStyles;
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
  children: IconTypeElement;
};

const IconButton = ({
  children,
  cssProp,
  className,
  disabled = false,
  ariaLabel,
  ...props
}: IconButtonProps): ReactElement => {
  const iconStyled = emotionClone(children, {
    ...children.props,
    css: emotionCss([
      tw`w-6 h-6 text-current fill-current`,
      children.props.css,
    ]),
  });

  const disabledStyles = disabled ? disabledTextButton : undefined;

  return (
    <ClassNames>
      {({ css }) => (
        <AtomButton
          {...props}
          css={emotionCss([
            tw`inline-flex items-center justify-center text-gray-700 rounded-full w-11 h-11`,
            cssProp,
          ])}
          aria-label={ariaLabel}
          className={css([className, disabledStyles])}
        >
          {iconStyled}
        </AtomButton>
      )}
    </ClassNames>
  );
};
export default IconButton;
