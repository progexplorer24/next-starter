import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { SvgProps } from "@components/atoms/atom-types";

const Svg = ({
  children,
  viewBox = "0 0 24 24",
  fill = "none",
  css,
  ...props
}: SvgProps): ReactElement => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={fill}
      {...props}
      css={emotionCss([css])}
    >
      {children}
    </motion.svg>
  );
};
export default Svg;
