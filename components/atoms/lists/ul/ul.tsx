import React, { ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
import cloneEmotion from "utils/emotion-clone";
import RightArrow from "./right-arrow.svg";

export type UlProps = {
  css?: SerializedStyles;
  icon?: JSX.Element;
  children: JSX.Element[];
};

const Ul = ({
  children,
  icon = <RightArrow />,
  ...props
}: UlProps): ReactElement => {
  const iconStyles = css`
    ${tw`inline-flex w-5 h-5 mr-2 text-gray-600 fill-current`}
  `;

  const iconWithStyles = cloneEmotion(icon, { css: iconStyles });

  return (
    <ul
      css={css`
        ${tw`mt-6`}
      `}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { listDecoration: iconWithStyles })
      )}
    </ul>
  );
};

export default Ul;
