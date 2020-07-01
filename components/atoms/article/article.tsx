import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { ArticleProps } from "@components/types";

const Article = ({
  children,
  cssProp,
  ...props
}: ArticleProps): ReactElement => {
  return (
    <article {...props} css={emotionCss([cssProp])}>
      {children}
    </article>
  );
};
export default Article;
