import { SerializedStyles } from "@emotion/core";
import { TwStyle } from "twin.macro";
import { ReactNode, FunctionComponentElement } from "react";
import type { HrProps, SvgProps, DivProps } from "./atoms/atom-types";

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

export type AlertProps = DivProps & {
  icon?: FunctionComponentElement<SvgProps> | false;

  type?: "outlined" | "filled" | "default";
  children: ReactNode;
};
