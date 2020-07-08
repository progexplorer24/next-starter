import React, { ReactElement, useState } from "react";
import { css as emotionCss, ClassNames, SerializedStyles } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import { cond, always, equals, T } from "ramda";
import type { ButtonProps as AtomButtonProps } from "@components/atoms/atom-types";
import Span from "@components/atoms/inline-text-semantics/span/span";
import { colors } from "data";
import AtomButton from "../atoms/forms/button/button";
import {
  disabledFilledButton,
  disabledTextButton,
  disabledOutlinedButton,
} from "./styles";

type ButtonProps = AtomButtonProps & {
  variant?: "filled" | "default" | "text" | "outlined";
  /**
   * Apply styles directly to button element. Useful i.e. for margins
   */
  buttonCss?: SerializedStyles;
};

const Button = ({
  children,
  className,
  buttonCss,
  disabled = false,
  variant = "default",
  ...props
}: ButtonProps): ReactElement => {
  const [isHover, setIsHover] = useState(false);

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

  const hoverVariant = isHover
    ? {
        animate: {
          backgroundColor: colors.teal["800"].value,
        },
      }
    : {
        animate: {
          backgroundColor: colors.teal["700"].value,
        },
      };
  // const hoverVariant = tw`opacity-60`;

  console.log(hoverVariant);

  return (
    <ClassNames>
      {({ css }) => (
        <AtomButton
          {...props}
          css={emotionCss([buttonCss])}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          disabled={disabled}
        >
          <Span
            css={emotionCss([
              tw`flex items-center justify-center px-4 py-2`,
              buttonStyles,
              props.css,
            ])}
            className={css([className, disabledVariant])}
            {...hoverVariant}
          >
            {children}
          </Span>
        </AtomButton>
      )}
    </ClassNames>
  );
};
export default Button;
