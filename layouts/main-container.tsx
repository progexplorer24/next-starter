import React, { FC, ReactNode } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";

type MainContainerProps = {
  css?: SerializedStyles;
  children: ReactNode;
};

const MainContainer: FC<MainContainerProps> = ({ children, ...props }) => {
  return (
    <main
      role="main"
      css={css`
        ${tw`max-w-3xl px-5 my-6 md:mx-auto `}
      `}
      {...props}
    >
      {children}
    </main>
  );
};

export default MainContainer;
