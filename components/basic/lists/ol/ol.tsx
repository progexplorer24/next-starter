import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import AtomOl, { OlProps } from "@components/atoms/lists/ol/ol";
import Numeration from "./numeration/numeration";

const Ol = ({ children, css, ...props }: OlProps): ReactElement => {
  return (
    <AtomOl css={emotionCss([tw`mt-6`, css])} {...props}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          listDecoration: (
            <Numeration css={emotionCss([tw`absolute top-0 left-0`])}>
              {i + 1}
            </Numeration>
          ),
          css: emotionCss([tw`relative pl-7`]),
        })
      )}
    </AtomOl>
  );
};

export default Ol;
