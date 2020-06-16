import React, { ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Numeration from "./numeration/numeration";

export type OlProps = {
  css?: SerializedStyles;
  className?: string;
  children: JSX.Element[];
};

const Ol = ({ children, css, ...props }: OlProps): ReactElement => {
  return (
    <ol css={emotionCss([tw`mt-6`, css])} {...props}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          listDecoration: <Numeration>{i + 1}</Numeration>,
        })
      )}
    </ol>
  );
};

export default Ol;
