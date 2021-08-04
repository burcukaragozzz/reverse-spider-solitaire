import React from "react";

import { BaseButton } from "./styled";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({ ...rest }) => {
  return <BaseButton {...rest} data-testid="btn" />;
};
