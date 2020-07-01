import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { BlockquoteProps } from "@components/types";

const Blockquote = ({
  children,
  cite,
  cssProp,
  ...props
}: BlockquoteProps): ReactElement => {
  const zeroMaringOnParagraph = emotionCss`
    ${tw`m-0`}
  `;

  const childrenWithStyles = React.cloneElement(children, {
    css: emotionCss([children.props.css, zeroMaringOnParagraph]),
  });

  return (
    <blockquote
      css={emotionCss([
        tw`py-4 pl-6 mt-6 text-lg break-words bg-gray-200 border-l-4 border-gray-600`,
        cssProp,
      ])}
      cite={typeof cite === "undefined" ? undefined : cite}
      {...props}
    >
      {childrenWithStyles}
    </blockquote>
  );
};

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
