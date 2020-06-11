import React from "react";
import { css, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";

export type BlockquoteProps = {
  children: JSX.Element;
  css?: SerializedStyles;
  author?: string;
  cite?: string;
};

const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  cite,
  ...props
}) => {
  const zeroMaringOnParagraph = css`
    ${tw`m-0`}
  `;

  return (
    <blockquote
      css={css`
        ${tw`py-4 pl-6 mt-6 text-lg break-words bg-gray-200 border-l-4 border-gray-600`}
      `}
      cite={typeof cite === "undefined" ? undefined : cite}
      {...props}
    >
      {React.cloneElement(children, { css: zeroMaringOnParagraph })}
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
