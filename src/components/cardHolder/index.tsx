import React from "react";

import { CardBody } from "./styled";

export type Props = {
  isRemainingCard?: boolean;
  onClick?: VoidFunction;
};

export const CardHolder: React.FC<Props> = ({
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
