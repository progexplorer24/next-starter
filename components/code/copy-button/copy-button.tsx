import React, { ReactElement, ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/core";
import tw from "twin.macro";

type CopyButtonProps = {
  css?: SerializedStyles;
  handleClick: () => void;
  children?: ReactNode;
};

const CopyButton = ({
  children = "Copy",
  handleClick,
  ...props
}: CopyButtonProps): ReactElement => {
  const positionButton = tw`absolute right-0 z-10 px-4 py-2`;

  return (
    <button
      onClick={handleClick}
      type="button"
      css={css`
        ${positionButton}
        ${tw`text-sm font-bold tracking-widest text-gray-100 bg-blue-700 rounded-tr-lg rounded-bl-lg hocus:bg-blue-600 hocus:text-white focus:outline-none`}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CopyButton;
