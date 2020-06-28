import React from "react";
import { css as emotionCss } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";
import { cond, always, equals, T } from "ramda";
import AtomButton, {
  ButtonProps as AtomButtonProps,
} from "../atoms/button/button";

type ButtonProps = AtomButtonProps & {
  type?: "filled" | "default" | "text" | "outlined";
};

const Button = ({
  children,
  css,
  type = "default",
  ...props
}: ButtonProps): JSX.Element => {
  const buttonStyles = cond<string, TwStyle | undefined>([
    [
      equals("filled"),
      always(
        tw`text-sm font-bold tracking-wide text-white uppercase bg-gray-700 rounded-md min-w-22 shadow-8`
      ),
    ],
    [
      equals("text"),
      always(
        tw`text-sm font-bold tracking-wide text-gray-700 uppercase bg-transparent rounded-md min-w-22`
      ),
    ],
    [
      equals("outlined"),
      always(
        tw`text-sm font-bold tracking-wide text-gray-700 uppercase bg-gray-100 border border-gray-400 rounded-md`
      ),
    ],
    [T, always(tw`bg-gray-200`)],
  ])(type);

  return (
    <AtomButton {...props} css={emotionCss([tw`px-4 py-2`, buttonStyles, css])}>
      {children}
    </AtomButton>
  );
};
export default Button;
