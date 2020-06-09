import React, { ReactNode } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import tw from "twin.macro";
import { css } from "@emotion/core";
import copyToClipboard from "../../utils/copyt-to-clipboard";
import CopyButton from "./copy-button/copy-button";
import LineNumber from "./line-number/line-number";
import LanguageButton from "./language-button/language-button";

export type CodeProps = {
  children: {
    props: {
      parentName: string;
      className: string;
      originalType: string;
      mdxType: string;
      children: string;
    };
  };
};

const Code: React.FC<CodeProps> = ({ children }) => {
  const mdxProps = children.props;
  const cName = mdxProps?.className || "";

  const matches = cName.match(/language-(?<lang>.*)/);
  const codeString = children.props.children.trim();

  const handleClick = (): void => {
    copyToClipboard(codeString);
  };

  // const metaString = mdxProps.metastring || "";

  // console.log(metaString);

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={undefined}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }): ReactNode => (
        <div
          css={css`
            ${tw`relative mt-8`}
          `}
        >
          {matches.groups.lang ? (
            <LanguageButton>{matches.groups.lang}</LanguageButton>
          ) : undefined}
          <CopyButton handleClick={handleClick}>Copy</CopyButton>
          <pre
            className={className}
            style={style}
            css={css`
              ${tw`relative px-4 pt-10 pb-2 overflow-x-auto scrolling-touch text-left rounded-lg`}
              & .token-line {
                ${tw`h-5 leading-snug`}
              }
              /* width */
              ::-webkit-scrollbar {
                ${tw`h-2`}
              }

              /* Track */
              ::-webkit-scrollbar-track {
                ${tw`bg-gray-700`}
              }

              /* Handle */
              ::-webkit-scrollbar-thumb {
                ${tw`bg-gray-400`}
              }
            `}
          >
            <code
              css={css`
                ${tw`inline-block min-w-full`}
              `}
            >
              {tokens.map((line, i) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  {...getLineProps({
                    line,
                    key: i,
                  })}
                >
                  {/* {console.log(
                    getLineProps({
                      line,
                      key: i,
                      className: `code-highlight`,
                    })
                  )} */}
                  <LineNumber>{i + 1}</LineNumber>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/jsx-key
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
