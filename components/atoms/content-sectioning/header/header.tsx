import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { HeaderProps } from "@components/atoms/atom-types";

/**
 * [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
 *
 * Header represents introductory content.
 *
 * **ARIA role:**
 * - 	banner, or no corresponding role if a descendant of an article, aside, main, nav or section element, or an element with role=article, complementary, main, navigation or region
 */
const Header = ({ children, cssProp, ...props }: HeaderProps): ReactElement => {
  return (
    <header {...props} css={emotionCss([cssProp])}>
      {children}
    </header>
  );
};
export default Header;
