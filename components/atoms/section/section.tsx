import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { SectionProps } from "@components/types";

const Section = ({
  children,
  cssProp,
  ...props
}: SectionProps): ReactElement => {
  return (
    <section {...props} css={emotionCss([cssProp])}>
      {children}
    </section>
  );
};
export default Section;
