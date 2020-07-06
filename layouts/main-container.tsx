import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import { MainProps } from "@components/atoms/atom-types";
import Main from "@components/atoms/content-sectioning/main/main";

const MainContainer = ({
  children,
  css,
  ...props
}: MainProps): ReactElement => {
  return (
    <Main
      css={emotionCss([tw`max-w-3xl px-5 my-6 md:mx-auto`, css])}
      {...props}
    >
      {children}
    </Main>
  );
};

export default MainContainer;
