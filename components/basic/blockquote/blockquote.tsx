import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import BlockquoteAtom from "@components/atoms/text-content/blockquote/blockquote";
import type { BlockquoteProps } from "@components/atoms/atom-types";

const Blockquote = ({
  children,
  cssProp,
  ...props
}: BlockquoteProps): ReactElement => (
  <BlockquoteAtom
    css={emotionCss([tw`italic font-thin rounded-lg`, cssProp])}
    {...props}
  >
    {children}
  </BlockquoteAtom>
);

export default Blockquote;

/* <a href={source} target="_blank" rel="noopener noreferrer">
  {author}
</a> */

/*
{typeof author === "undefined" ? undefined : (
        <figcaption
          css={css`
            ${tw`block mt-2 text-sm`}
          `}
        >
          &mdash;{" "}
          {typeof source === "undefined" ? (
            author
          ) : (
            <cite>
              <MyLink external address={source}>
                {author}
              </MyLink>
            </cite>
          )}
        </figcaption>
      )}
*/
