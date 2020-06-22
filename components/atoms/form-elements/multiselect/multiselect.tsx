import React, { ReactNode } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/core";
import { addBasicFormStyling } from "../styles";

type MultiselectProps = {
  css?: SerializedStyles;
  className?: string;
  name: string;
  id: string;
  children: ReactNode;
};

const Multiselect: React.FC<MultiselectProps> = ({
  id,
  name,
  children,
  ...props
}) => {
  return (
    <select
      name={name}
      id={id}
      css={emotionCss([addBasicFormStyling])}
      multiple
      {...props}
    >
      {children}
    </select>
  );
};

export default Multiselect;
