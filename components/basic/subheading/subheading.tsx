import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { PProps } from "@components/atoms/atom-types";
import P from "../p/p";

const SubHeading = ({ children, css, ...props }: PProps): ReactElement => {
  return (
    <P {...props} css={emotionCss([tw`mt-0 mb-8 font-bold`, css])}>
      {children}
    </P>
  );
};
export default SubHeading;
