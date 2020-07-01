import React, { ReactElement } from "react";
import { css as emotionCss, ClassNames, SerializedStyles } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import { cond, always, equals, T } from "ramda";
import type { ButtonProps as AtomButtonProps } from "@components/types";
import AtomButton from "../atoms/button/button";
import {
  disabledFilledButton,
  disabledTextButton,
  disabledOutlinedButton,
} from "./styles";

type ButtonProps = AtomButtonProps & {
  variant?: "filled" | "default" | "text" | "outlined";
};

const Button = ({
  children,
  cssProp,
  className,
  disabled = false,
  variant = "default",
  ...props
}: ButtonProps): ReactElement => {
  const { buttonStyles, disabledStyles } = cond<
    string,
    {
      buttonStyles: TwStyle | SerializedStyles;
      disabledStyles: TwStyle | SerializedStyles;
    }
  >([
    [
      equals("filled"),
      always({
        buttonStyles: tw`text-sm font-bold tracking-wide text-white uppercase bg-gray-700 rounded-md min-w-22 shadow-8`,
        disabledStyles: disabledFilledButton,
      }),
    ],
    [
      equals("text"),
      always({
        buttonStyles: tw`text-sm font-bold tracking-wide text-gray-700 uppercase bg-transparent rounded-md min-w-22`,
        disabledStyles: disabledTextButton,
      }),
    ],
    [
      equals("outlined"),
      always({
        buttonStyles: tw`text-sm font-bold tracking-wide text-gray-700 uppercase bg-gray-100 border border-gray-400 rounded-md`,
        disabledStyles: disabledOutlinedButton,
      }),
    ],
    [
      T,
      always({
        buttonStyles: tw`bg-gray-200`,
        disabledStyles: disabledFilledButton,
      }),
    ],
  ])(variant);

  const disabledVariant = disabled ? disabledStyles : undefined;

  return (
    <ClassNames>
      {({ css }) => (
        <AtomButton
          {...props}
          css={emotionCss([tw`px-4 py-2`, buttonStyles, cssProp])}
          className={css([className, disabledVariant])}
        >
          {children}
        </AtomButton>
      )}
    </ClassNames>
  );
};
export default Button;
