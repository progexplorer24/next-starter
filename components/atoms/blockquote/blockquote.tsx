import React, { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";

export type BlockquoteProps = {
  children: React.ReactElement<
    { css?: SerializedStyles; hello: string[] },
    (props: unknown) => ReactElement
  >;
  css?: SerializedStyles;
  author?: string;
  cite?: string;
};

const Blockquote = ({
  children,
  cite,
  ...props
}: BlockquoteProps): JSX.Element => {
  const zeroMaringOnParagraph = css`
    ${tw`m-0`}
  `;

  const childrenWithStyles = React.cloneElement(children, {
    css: css([children.props.css, zeroMaringOnParagraph]),
  });

  return (
    <blockquote
      css={css`
        ${tw`py-4 pl-6 mt-6 text-lg break-words bg-gray-200 border-l-4 border-gray-600`}
      `}
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
