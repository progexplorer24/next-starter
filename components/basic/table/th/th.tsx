import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomTh, { ThProps } from "@components/atoms/table/th/th";

const Th = ({ children, css, ...props }: ThProps): ReactElement => {
  return (
    <AtomTh
      css={emotionCss([tw`text-sm font-bold text-gray-900 bg-gray-200`, css])}
      {...props}
    >
      {children}
    </AtomTh>
  );
};

export default Th;
