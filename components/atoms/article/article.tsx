import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";

type ArticleProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const Article = ({ children, css, ...props }: ArticleProps): JSX.Element => {
  return (
    <article {...props} css={emotionCss([css])}>
      {children}
    </article>
  );
};
export default Article;
