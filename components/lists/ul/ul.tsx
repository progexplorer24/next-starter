import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
// import { LIProps } from "../li/li";
import RightArrow from "../li/right-arrow.svg";

export type ULProps = {
  css?: SerializedStyles;
  children: JSX.Element[];
};

const UL: FC<ULProps> = ({ children, ...props }) => {
  const listType = (
    <RightArrow
      css={css`
        ${tw`inline-flex w-5 h-5 mr-2 text-gray-600 fill-current`}
      `}
    />
  );

  return (
    <ul
      css={css`
        ${tw`mt-6`}
      `}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { listType })
      )}
    </ul>
  );
};

export default UL;
