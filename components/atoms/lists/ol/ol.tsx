import React, { FC } from "react";
import { SerializedStyles, css } from "@emotion/core";
import {} from "ramda";
import tw from "twin.macro";

export type OLProps = {
  css?: SerializedStyles;
  children: JSX.Element[];
};

const OL: FC<OLProps> = ({ children, ...props }) => {
  type NumerationProps = {
    number: number;
  };
  const Numeration = ({ number }: NumerationProps): JSX.Element => (
    <span
      css={css`
        ${tw`px-1 mr-2 font-semibold text-gray-600`}
      `}
    >
      {number}.
    </span>
  );

  return (
    <ol
      css={css`
        ${tw`mt-6`}
      `}
      {...props}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          listDecoration: <Numeration number={i + 1} />,
        })
      )}
    </ol>
  );
};

export default OL;
