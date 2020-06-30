import tw from "twin.macro";
import { css } from "@emotion/core";

export const denseButton = tw`min-h-0 min-w-18 h-9`;

const commonDisabledStyles = tw`text-gray-900 shadow-none cursor-auto pointer-events-none text-opacity-30`;

export const disabledFilledButton = css([
  commonDisabledStyles,
  tw`bg-gray-700 bg-opacity-15`,
]);
export const disabledTextButton = css([commonDisabledStyles]);
export const disabledOutlinedButton = css(commonDisabledStyles, [
  tw`border-gray-700 border-opacity-15`,
]);
