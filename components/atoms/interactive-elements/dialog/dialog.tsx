import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { DialogProps } from "@components/atoms/atom-types";

/**
 * Warning: This HTML element is nohttps://caniuse.com/#search=dialogt well supported right now:
 * Support: 71.5 % DATE: 01.07.2020
 * See link: https://caniuse.com/#search=dialog
 *
 */

const Dialog = ({ children, cssProp, ...props }: DialogProps): ReactElement => {
  return (
    <dialog {...props} css={emotionCss([cssProp])}>
      {children}
    </dialog>
  );
};
export default Dialog;
