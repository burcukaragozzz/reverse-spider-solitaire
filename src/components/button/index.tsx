import { IButton } from "interfaces";
import React from "react";

import { BaseButton } from "./styled";

export const Button: React.FC<IButton> = ({ ...rest }) => {
  return <BaseButton {...rest} data-testid="btn" />;
};
