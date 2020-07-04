import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import type { SelectProps } from "@components/atoms/atom-types";
import emotionClone from "@utils/emotion-clone";
import { addBasicFormStyling } from "../styles";
import ArrowIcon from "./arrow.svg";

const Select = ({
  id,
  name,
  children,
  icon = <ArrowIcon />,
  ...props
}: SelectProps): ReactElement => {
  const iconWithStyles = emotionClone(icon, {
    ...icon.props,
    css: emotionCss([
      tw`absolute top-0 right-0 w-6 h-6 mr-2 text-gray-500 pointer-events-none fill-current`,
    ]),
  });

  return (
    <span css={emotionCss([tw`relative`])}>
      <select
        name={name}
        id={id}
        {...props}
        css={emotionCss([addBasicFormStyling])}
      >
        {children}
      </select>
      {iconWithStyles}
    </span>
  );
};

export default Select;
