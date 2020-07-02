import React, { ReactElement } from "react";
import type { InputProps } from "@components/atoms/atom-types";

const InputHidden = (props: Omit<InputProps, "type">): ReactElement => {
  return <input type="hidden" {...props} />;
};

export default InputHidden;
