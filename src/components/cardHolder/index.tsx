import React from "react";

import { CardBody } from "./styled";

export type CardHolderProps = {
  isRemainingCard?: boolean;
  onClick?: VoidFunction;
};

export const CardHolder: React.FC<CardHolderProps> = ({
  children,
  isRemainingCard,
  onClick,
}) => {
  return (
    <CardBody isRemainingCard={isRemainingCard} onClick={onClick}>
      {children}
    </CardBody>
  );
};
