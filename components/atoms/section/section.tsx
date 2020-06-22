import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type SectionProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Section = ({ children, css, ...props }: SectionProps): JSX.Element => {
  return (
    <section {...props} css={emotionCss([css])}>
      {children}
    </section>
  );
};
export default Section;
