import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DetailsProps } from "@components/atoms/atom-types";

/**
 * Warning!: The details element is not supported in Edge (prior version 79).
 */

const Details = ({ children, css, ...props }: DetailsProps): ReactElement => {
  return (
    <details {...props} css={emotionCss([css])}>
      {children}
    </details>
  );
};
export default Details;
