import React from "react";
import { css } from "@emotion/core";
import tw from "twin.macro";

export type BlockquoteProps = {
  children: JSX.Element;
  author?: string;
  source?: string;
};

const Blockquote: React.FC<BlockquoteProps> = ({ children, source }) => {
  const zeroMaringOnParagraph = css`
    ${tw`m-0`}
  `;

  return (
    <figure
      css={css`
        ${tw`py-4 pl-6 mt-6 text-base italic font-thin text-gray-800 break-words bg-gray-200 border-l-4 border-gray-600 rounded-lg md:text-xl`}
      `}
    >
      <blockquote cite={typeof source === "undefined" ? undefined : source}>
        {React.cloneElement(children, { css: zeroMaringOnParagraph })}
      </blockquote>
    </figure>
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
