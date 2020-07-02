import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomTh from "@components/atoms/table-content/th/th";
import type { ThProps } from "@components/atoms/atom-types";

const Th = ({ children, cssProp, ...props }: ThProps): ReactElement => {
  return (
    <AtomTh
      css={emotionCss([
        tw`text-sm font-bold text-gray-900 bg-gray-200`,
        cssProp,
      ])}
      {...props}
    >
      {children}
    </AtomTh>
  );
};

export default Th;
