import { SerializedStyles, css } from "@emotion/core";
import { TwStyle } from "twin.macro";

const placeholderStyles = (
  styles: SerializedStyles | TwStyle
): SerializedStyles =>
  css`
    &::placeholder {
      ${styles}
    }
  `;

export default placeholderStyles;
