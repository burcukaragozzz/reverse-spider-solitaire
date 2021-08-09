import React from "react";

import { CardBody } from "./styled";

export type Props = {
  isRemainingCard?: boolean,
}

export const CardHolder: React.FC<Props> = ({
  children, 
  isRemainingCard
}) => {

  return (
    <CardBody isRemainingCard={isRemainingCard}>
      {children}
    </CardBody>
  );
};