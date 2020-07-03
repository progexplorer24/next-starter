import { css } from "@emotion/core";

type StartMsg = "deletion start" | "insertion start";
type EndMsg = "insertion end" | "deletion end";

const announceEdit = (startMsg: StartMsg, endMsg: EndMsg) => css`
  del::before,
  del::after {
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  del::before {
    content: " [${startMsg}] ";
  }

  del::after {
    content: " [${endMsg}] ";
  }
`;

export const announceDelEdit = announceEdit("deletion start", "deletion end");

export const announceInsEdit = announceEdit("insertion start", "insertion end");
