import { SerializedStyles, jsx } from "@emotion/core";

/**
|--------------------------------------------------
| This function was created based on this issues:
  https://github.com/emotion-js/emotion/issues/1102
  https://github.com/emotion-js/emotion/issues/1404
  https://github.com/emotion-js/emotion/issues/1713
|--------------------------------------------------
*/

const cloneEmotion = (
  element: JSX.Element & { ref?: unknown },
  props: { css?: SerializedStyles }
): JSX.Element =>
  jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });

export default cloneEmotion;
