import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { AddressProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
 *
 * The HTML <address> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.
 *
 * ## Usage Notes
 *
 * - It can now be used to mark up arbitrary addresses.
 * - This element should not contain more information than the contact information.
 * - Typically an <address> element can be placed inside the <footer> element
 */

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
