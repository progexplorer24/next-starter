import { css, SerializedStyles } from "@emotion/core";

type StartMsg = "deletion start" | "insertion start" | "highlight start";
type EndMsg = "insertion end" | "deletion end" | "highlight end";

const announceToScreenReader = (
  startMsg: StartMsg,
  endMsg: EndMsg
): SerializedStyles => css`
  &::before,
  &::after {
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  &::before {
    content: " [${startMsg}] ";
  }

  &::after {
    content: " [${endMsg}] ";
  }
`;

export default announceToScreenReader;
