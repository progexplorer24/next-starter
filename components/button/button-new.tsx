import React, { ReactElement } from "react";
import { css as emotionCss, ClassNames, SerializedStyles } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import { cond, always, equals, T } from "ramda";
import type { ButtonProps as AtomButtonProps } from "@components/atoms/atom-types";
import Span from "@components/atoms/inline-text-semantics/span/span";
import { colors, customShadows } from "data";
import { useAnimation, TargetAndTransition } from "framer-motion";
import rgba from "@utils/rgba";
import AtomButton from "../atoms/forms/button/button";
import {
  disabledFilledButton,
  disabledTextButton,
  disabledOutlinedButton,
} from "./styles";

type ColorTypes = keyof typeof colors;

type ButtonProps = AtomButtonProps & {
  variant?: "filled" | "default" | "text" | "outlined";
  /**
   * Apply styles directly to button element. Useful i.e. for margins
   */
  buttonCss?: SerializedStyles;
  color?: Exclude<ColorTypes, "black" | "white">;
};

const Button = ({
  children,
  className,
  buttonCss,
  color = "gray",
  disabled = false,
  variant = "default",
  ...props
}: ButtonProps): ReactElement => {
  // const [isHover, setIsHover] = useState(false);

  const controls = useAnimation();

  const { buttonStyles, disabledStyles, state } = cond<
    string,
    {
      buttonStyles: TwStyle | SerializedStyles;
      disabledStyles: TwStyle | SerializedStyles;
      state: {
        enabled?: TargetAndTransition;
        disabled?: TargetAndTransition;
        hover?: TargetAndTransition;
        focused?: TargetAndTransition;
        pressed?: TargetAndTransition;
      };
    }
  >([
    [
      equals("filled"),
      always({
        buttonStyles: emotionCss([
          tw`text-sm font-bold tracking-wide text-white uppercase bg-gray-700 rounded-md min-w-22 shadow-2`,
          colors[color]["700"].twClass,
        ]),
        disabledStyles: disabledFilledButton,
        state: {
          enabled: {
            boxShadow: customShadows["shadow-2"].value,
            backgroundColor: colors[color]["700"].value,
          },
          hover: {
            boxShadow: customShadows["shadow-4"].value,
            backgroundColor: colors[color]["800"].value,
          },
        },
      }),
    ],
    [
      equals("text"),
      always({
        buttonStyles: emotionCss([
          tw`text-sm font-bold tracking-wide text-gray-700 uppercase rounded-md min-w-22`,
          emotionCss`
          background-color: ${rgba(colors[color]["300"].value, 0)}
          `,
        ]),
        disabledStyles: disabledTextButton,
        state: {
          enabled: {
            backgroundColor: rgba(colors[color]["200"].value, 0),
          },
          hover: {
            backgroundColor: rgba(colors[color]["200"].value, 1),
          },
        },
      }),
    ],
    [
      equals("outlined"),
      always({
        buttonStyles: tw`text-sm font-bold tracking-wide text-gray-700 uppercase bg-gray-100 border border-gray-400 rounded-md`,
        disabledStyles: disabledOutlinedButton,
        state: {},
      }),
    ],
    [
      T,
      always({
        buttonStyles: tw`bg-gray-200`,
        disabledStyles: disabledFilledButton,
        state: {},
      }),
    ],
  ])(variant);

  const disabledVariant = disabled ? disabledStyles : undefined;

  return (
    <ClassNames>
      {({ css }) => (
        <AtomButton
          {...props}
          css={emotionCss([buttonCss])}
          onHoverStart={() => controls.start(state.hover ?? {})}
          onHoverEnd={() => controls.start(state.enabled ?? {})}
          disabled={disabled}
        >
          <Span
            css={emotionCss([
              tw`flex items-center justify-center px-4 py-2`,
              buttonStyles,
              props.css,
            ])}
            className={css([className, disabledVariant])}
            animate={controls}
            initial="enabled"
          >
            {children}
          </Span>
        </AtomButton>
      )}
    </ClassNames>
  );
};
export default Button;
