import { ReactElement, ReactNode } from "react";
import { jsx } from "@emotion/core";
import type { EmotionProps } from "@components/types";
/**
|--------------------------------------------------
| This function was created based on this issues:
  https://github.com/emotion-js/emotion/issues/1102
  https://github.com/emotion-js/emotion/issues/1404
  https://github.com/emotion-js/emotion/issues/1713
|--------------------------------------------------
*/

const emotionClone = <T extends EmotionProps>(
  element: ReactElement<T, (props: T) => ReactElement>,
  config: T,
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
