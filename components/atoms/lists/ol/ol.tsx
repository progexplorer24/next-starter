import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Numeration from "./numeration/numeration";
import type { LiProps } from "../li/li";

export type OlProps = {
  css?: SerializedStyles;
  className?: string;
  children:
    | ReactElement<LiProps, (props: LiProps) => ReactElement>
    | ReactElement<LiProps, (props: LiProps) => ReactElement>[];
};

const Ol = ({ children, css, ...props }: OlProps): ReactElement => {
  return (
    <ol css={emotionCss([tw`mt-6`, css])} {...props}>
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
    </ol>
  );
};

export default Ol;
