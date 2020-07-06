import { SerializedStyles } from "@emotion/core";
import { TwStyle } from "twin.macro";
import { ReactNode } from "react";
import { HrProps, EmotionProps, IconTypeElement } from "./atoms/atom-types";

/**
 *  CUSTOM ELEMENTS
 */

export type TextHRProps = HrProps & {
  dataContent?: string;
};

// ======================================================================================================
// ======================================================================================================

/**
 * ---- Alert Types ----
 * This section includes all additional typings for custom elements
 */

export type AlertStyles = {
  iconStyles?: TwStyle | SerializedStyles;
  alertStyles?: TwStyle | SerializedStyles;
};

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  EmotionProps & {
    icon?: IconTypeElement | false;
    css?: SerializedStyles;
    type?: "outlined" | "filled" | "default";
    children: ReactNode;
  };
