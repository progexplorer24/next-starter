import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AddressProps } from "@components/atoms/atom-types";

const Address = ({
  children,
  cssProp,
  ...props
}: AddressProps): ReactElement => {
  return (
    <address {...props} css={emotionCss([cssProp])}>
      {children}
    </address>
  );
};
export default Address;
