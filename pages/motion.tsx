import React from "react";
import { NextPage } from "next";
import Main from "@components/atoms/content-sectioning/main/main";
import H1 from "@components/basic/h1/h1";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Frame from "@components/motion/frame";
// import Button from "@components/button/button";
import Div from "@components/atoms/text-content/div/div";
import useGrowAnimation from "hooks/use-grow-animation";
import { motion } from "framer-motion";

const Motion: NextPage<Record<string, unknown>> = () => {
  const growAnimation = useGrowAnimation();
  return (
    <Main>
      <H1
        css={emotionCss([
          tw`mt-6 font-light tracking-tight md:tracking-tighter md:text-5xl`,
        ])}
      >
        Motion
      </H1>
      <Frame />

      <Div css={emotionCss([tw`flex justify-center`])}>
        <motion.button
          {...growAnimation}
          type="button"
          css={emotionCss([
            tw`min-w-11 min-h-11`,
            tw`px-4 py-2`,
            tw`text-sm font-bold tracking-wide text-white uppercase bg-gray-700 rounded-md min-w-22 shadow-8`,
            tw`mt-8 bg-red-600 `,
          ])}
        >
          Filled Button
        </motion.button>
      </Div>
    </Main>
  );
};

export default Motion;
