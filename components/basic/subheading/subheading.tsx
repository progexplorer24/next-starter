import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import P from "../p/p";

type SubHeadingProps = {
  css?: SerializedStyles;
  className?: string;
  children: ReactNode;
};

const SubHeading = ({
  children,
  css,
  ...props
}: SubHeadingProps): JSX.Element => {
  return (
    <P {...props} css={emotionCss([tw`mt-0 mb-8 font-bold`, css])}>
      {children}
    </P>
  );
};
export default SubHeading;
