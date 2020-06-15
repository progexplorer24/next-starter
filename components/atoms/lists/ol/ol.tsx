import React, { ReactElement } from "react";
import { SerializedStyles, css } from "@emotion/core";
import tw from "twin.macro";
import Numeration from "./numeration/numeration";

export type OlProps = {
  css?: SerializedStyles;
  children: JSX.Element[];
};

const Ol = ({ children, ...props }: OlProps): ReactElement => {
  return (
    <ol
      css={css`
        ${tw`mt-6`}
      `}
      {...props}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          listDecoration: <Numeration>{i + 1}</Numeration>,
        })
      )}
    </ol>
  );
};

export default Ol;
