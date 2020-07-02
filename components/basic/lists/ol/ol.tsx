import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomOl from "@components/atoms/text-content/ol/ol";
import type { OlProps } from "@components/atoms/atom-types";
import Numeration from "./numeration/numeration";

const Ol = ({ children, cssProp, ...props }: OlProps): ReactElement => {
  return (
    <AtomOl css={emotionCss([tw`mt-6`, cssProp])} {...props}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          listDecoration: (
            <Numeration css={emotionCss([tw`absolute top-0 left-0`])}>
              {i + 1}
            </Numeration>
          ),
          cssProp: emotionCss([tw`relative pl-7`]),
        })
      )}
    </AtomOl>
  );
};

export default Ol;
