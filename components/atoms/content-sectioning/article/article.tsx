import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import { ArticleProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
 *
 * Article represents a independent app element that is distributable & reusable.
 *  Examples include: a **forum post, a magazine or newspaper article, or a blog entry**.
 *
 * ## Usage Notes
 *
 * - Each `<article>` should be identified, typically by including a heading (`<h1>-<h6>` element) as a child of the `<article>` element.
 * - Article elements can be nested.
 * - Author information of an `<article>` element can be provided through the <address> element, but it doesn't apply to nested <article> elements.
 * - The publication date and time of an `<article>` element can be described using the datetime attribute of a `<time>` element.
 */

const Article = ({ children, css, ...props }: ArticleProps): ReactElement => {
  return (
    <article {...props} css={emotionCss([css])}>
      {children}
    </article>
  );
};
export default Article;
