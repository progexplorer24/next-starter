import { css } from "@emotion/core";

type StartMsg = "deletion start" | "insertion start";
type EndMsg = "insertion end" | "deletion end";

const announceEdit = (startMsg: StartMsg, endMsg: EndMsg) => css`
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

export const announceDelEdit = announceEdit("deletion start", "deletion end");

export const announceInsEdit = announceEdit("insertion start", "insertion end");
