import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";

type ChildrenProps = {
  css?: SerializedStyles;
};

type ExampleProps = {
  css?: SerializedStyles;
  className?: string;
  classKey?: string;
  twClass?: TwStyle;
  children: ReactElement<ChildrenProps, (props: ChildrenProps) => ReactElement>;
};

const Example = ({
  children,
  classKey,
  twClass,
  css,
  ...props
}: ExampleProps): ReactElement => {
  return (
    <div css={emotionCss([tw`px-2 mt-4`, css])} {...props}>
      <span css={emotionCss([tw`text-sm font-bold text-gray-600`])}>
        .{classKey}
      </span>

      {React.cloneElement(children, {
        css: emotionCss([children?.props.css, twClass]),
      })}
    </div>
  );
};

export default Example;
