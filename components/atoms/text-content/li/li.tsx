import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { motion } from "framer-motion";
import type { LiProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
 *
 * The HTML `<li>` element is used to represent an item in a list. It must be contained in a parent element: an ordered list
 * (`<ol>`), an unordered list (`<ul>`), or a menu (`<menu>`).
 *
 */
const Li = ({ children, css, ...props }: LiProps): ReactElement => {
  return (
    <motion.li {...props} css={emotionCss([tw`list-none`, css])}>
      {children}
    </motion.li>
  );
};

export default Li;
