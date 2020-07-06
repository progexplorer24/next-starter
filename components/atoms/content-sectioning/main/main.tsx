import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { MainProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
 *
 * The HTML `<main>` element represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.
 *
 * ## Usage Notes
 *
 * - A document can't have more than one `main` element that is visible.
 * - The content of a <main> element should be unique to the document. Content that is repeated across a set of documents or document sections such as sidebars, navigation links, copyright information, site logos, and search forms shouldn't be included unless the search form is the main function of the page.
 * - This element is strictly informative. You shouldn't style it. (This is my interpretation).
 *
 * ## Accessibility concerns
 *
 * ### Landmark
 * The <main> element behaves like a main landmark role. Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. Prefer using the <main> element over declaring role="main", unless there are legacy browser support concerns.
 *
 * ### Skip Navigation
 *
 * Skip navigation, also known as "skipnav", is a technique that allows an assistive technology user to quickly bypass large sections of repeated content (main navigation, info banners, etc.). This lets the user access the main content of the page faster.
 *
 *  Adding an id attribute to the <main> element lets it be a target of a skip navigation link.
 *
 * ```
 * <body>
 *  <a href="#main-content">Skip to main content</a>
 *
 *  <!-- navigation and header content -->
 *
 *  <main id="main-content">
 *    <!-- main page content -->
 *  </main>
 * </body>
 * ```
 */
const Main = ({
  children,
  css,
  id = "main-content",
  ...props
}: MainProps): ReactElement => {
  return (
    <main id={id} {...props} css={emotionCss([css])}>
      {children}
    </main>
  );
};
export default Main;
