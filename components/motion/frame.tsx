import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { DivProps } from "@components/atoms/atom-types";
import useGrowAnimation from "hooks/use-grow-animation";
import Div from "@components/atoms/text-content/div/div";

const Frame = (props: DivProps): ReactElement => {
  const growAnimation = useGrowAnimation();
  return (
    <Div
      css={emotionCss([tw`mx-auto bg-blue-300 rounded-lg w-30 h-30`])}
      {...growAnimation}
      {...props}
    />
  );
};
export default Frame;
