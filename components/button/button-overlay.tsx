import React, { ReactElement, FunctionComponentElement } from "react";
import { css as emotionCss, SerializedStyles } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import { darken } from "polished";
import { cond, always, equals, T } from "ramda";
import type { ButtonProps as AtomButtonProps } from "@components/atoms/atom-types";
import { colors, customShadows } from "data";
import { useAnimation, TargetAndTransition } from "framer-motion";
import rgba from "@utils/rgba";

import AtomButton from "../atoms/forms/button/button";
import {
  disabledFilledButton,
  disabledTextButton,
  disabledOutlinedButton,
} from "./styles";

type ColorTypes = Exclude<keyof typeof colors, "black" | "white">;
type Shade =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type ButtonProps = Omit<AtomButtonProps, "children"> & {
  variant?: "filled" | "default" | "text" | "outlined";
  /**
   * Apply styles directly to button element. Useful i.e. for margins
   */
  color?: string;
  children: FunctionComponentElement<Record<string, unknown>>;
};

const ButtonOverlay = ({
  children,
  css,
  color = "gray-700",
  disabled = false,
  variant = "default",
  ...props
}: ButtonProps): ReactElement => {
  const controls = useAnimation();

  const [currentColor, shade] = color.split("-") as [ColorTypes, Shade];

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
          colors[currentColor][shade].twClass,
        ]),
        disabledStyles: disabledFilledButton,
        state: {
          enabled: {
            boxShadow: customShadows["shadow-2"].value,
            backgroundColor: colors[currentColor][shade].value,
          },
          hover: {
            boxShadow: customShadows["shadow-4"].value,
            backgroundColor: darken(0.1, colors[currentColor][shade].value),
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
          background-color: ${rgba(colors[currentColor]["300"].value, 0)}
          `,
        ]),
        disabledStyles: disabledTextButton,
        state: {
          enabled: {
            backgroundColor: rgba(colors[currentColor]["100"].value, 0),
          },
          hover: {
            backgroundColor: rgba(colors[currentColor]["100"].value, 1),
          },
        },
      }),
    ],
    [
      equals("outlined"),
      always({
        buttonStyles: tw`text-sm font-bold tracking-wide text-gray-700 uppercase bg-gray-100 border border-gray-400 rounded-md`,
        disabledStyles: disabledOutlinedButton,
        state: {
          enabled: {
            backgroundColor: rgba(colors[currentColor]["100"].value, 0),
          },
          hover: {
            backgroundColor: rgba(colors[currentColor]["100"].value, 1),
          },
        },
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
    <AtomButton
      {...props}
      css={emotionCss([tw`relative overflow-hidden focus:outline-none`, css])}
      onHoverStart={() => controls.start(state.hover ?? {})}
      onHoverEnd={() => controls.start(state.enabled ?? {})}
      disabled={disabled}
    >
      {React.cloneElement(children, {
        ...children.props,
        css: emotionCss([
          tw`flex items-center justify-center px-4 py-2 `,
          buttonStyles,
          disabledVariant,
        ]),
        animate: controls,
        initial: "enabled",
      })}
    </AtomButton>
  );
};
export default ButtonOverlay;
