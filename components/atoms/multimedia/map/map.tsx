import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { MapProps } from "@components/atoms/atom-types";

const Map = ({ children, cssProp, ...props }: MapProps): ReactElement => {
  return (
    <map {...props} css={emotionCss([cssProp])}>
      {children}
    </map>
  );
};
export default Map;
