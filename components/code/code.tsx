import React, { ReactNode, ReactElement } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import tw from "twin.macro";
import { css, SerializedStyles } from "@emotion/core";
import copyToClipboard from "../../utils/copyt-to-clipboard";
import LineNumber from "./line-number/line-number";
import LanguageLabel from "./language-label/language-label";
import CopyButton from "./copy-button/copy-button";

export type CodeProps = {
  css?: SerializedStyles;
  preCss?: SerializedStyles;
  buttonCss?: SerializedStyles;
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

const Code = ({
  children,
  preCss,
  buttonCss,
  ...props
}: CodeProps): ReactElement => {
  const mdxProps = children.props;
  const cName = mdxProps?.className || "";

  const langRegex = /language-(?<lang>.*)/;

  const matches = (langRegex.exec(cName)?.groups?.lang ?? "tsx") as Language;

  const codeString = children.props.children;
  const handleClick = async (): Promise<void> => {
    await copyToClipboard(codeString);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={matches}
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
          {...props}
        >
          <LanguageLabel>{matches}</LanguageLabel>

          <CopyButton css={buttonCss} handleClick={handleClick} />

          <pre
            className={className}
            style={style}
            css={css`
              ${tw`relative px-4 pt-10 pb-2 overflow-x-auto scrolling-touch text-left rounded-lg `}
              ${preCss}
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
