import { ReactElement, ReactNode } from "react";
import { jsx } from "@emotion/core";

/**
|--------------------------------------------------
| This function was created based on this issues:
  https://github.com/emotion-js/emotion/issues/1102
  https://github.com/emotion-js/emotion/issues/1404
  https://github.com/emotion-js/emotion/issues/1713
|--------------------------------------------------
*/

const emotionClone = (
  element: ReactElement<EmotionProps, (props: EmotionProps) => ReactElement>,
  config: EmotionProps,
  children?: ReactNode
): ReactElement => {
  return jsx(
    // eslint-disable-next-line no-underscore-dangle
    element.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__
      ? // eslint-disable-next-line no-underscore-dangle
        element.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__
      : element.type,
    {
      key: element.key !== null ? element.key : undefined,

      ...element.props,
      ...config,
    },
    children
  );
};

export default emotionClone;
