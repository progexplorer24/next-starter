import React, { ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw, { TwStyle } from "twin.macro";

type ChildrenProps = {
  css?: SerializedStyles;
};

type ExampleProps = {
  css?: SerializedStyles;
  classKey?: string;
  twClass?: TwStyle;
  children: ReactElement<ChildrenProps, (props: ChildrenProps) => ReactElement>;
};

const Example = ({
  children,
  classKey,
  twClass,
  ...props
}: ExampleProps): ReactElement => {
  return (
    <div
      css={css`
        ${tw`px-2 mt-4`}
      `}
      {...props}
    >
      <span
        css={css`
          ${tw`text-sm font-bold text-gray-600 `}
        `}
      >
        .{classKey}
      </span>

      {React.cloneElement(children, {
        css: css([children?.props.css, twClass]),
      })}
    </div>
  );
};

export default Example;
