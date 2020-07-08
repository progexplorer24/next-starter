import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { SvgProps } from "@components/atoms/atom-types";

const Svg = ({ children, css, ...props }: SvgProps): ReactElement => {
  return (
    <motion.svg {...props} css={emotionCss([css])}>
      {children}
    </motion.svg>
  );
};
export default Svg;
