import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { motion } from "framer-motion";
import type { MeterProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 *
 * The HTML `<meter>` element represents either a scalar value within a known range or a fractional value.
 */
const Meter = ({ children, css, ...props }: MeterProps): ReactElement => {
  return (
    <motion.meter {...props} css={emotionCss([css])}>
      {children}
    </motion.meter>
  );
};
export default Meter;
