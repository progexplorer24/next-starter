import React, { ReactElement } from "react";
import tw from "twin.macro";
import { css as emotionCss } from "@emotion/core";
import type { HrProps } from "@components/atoms/atom-types";

/**
 *
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
 *
 * The HTML `<hr>` element represents a thematic break between paragraph-level elements: for example, a change of scene in a
 * story, or a shift of topic within a section.
 *
 */
const Hr = ({ css, ...props }: HrProps): ReactElement => {
  return (
    <hr
      css={emotionCss([tw`my-10 border-t border-gray-300`, css])}
      {...props}
    />
  );
};

export default Hr;
