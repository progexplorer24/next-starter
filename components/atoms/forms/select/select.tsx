import React, { ReactNode, ReactElement } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import addFillColorToSvg from "@utils/add-fill-color-to-svg";
import { addBasicFormStyling } from "../styles";

type SelectProps = {
  css?: SerializedStyles;
  className?: string;
  name: string;
  id: string;
  iconColor?: string;
  children: ReactNode;
};

const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      className="heroicon-ui"
      d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
    />
  </svg>
);

const Select = ({
  id,
  name,
  children,
  iconColor = "#A0AEC0",
  ...props
}: SelectProps): ReactElement => {
  const selectStyles = emotionCss`
     ${tw`pr-10`};
        background-position: ${`right 0.5rem center`};
        background-size: 1.5em 1.5em;
        background-repeat: no-repeat;
        background-image: url(${addFillColorToSvg(svg, iconColor)});
  `;
  return (
    <select
      name={name}
      id={id}
      {...props}
      css={emotionCss([addBasicFormStyling, selectStyles])}
    >
      {children}
    </select>
  );
};

export default Select;
