import React from "react";

import { CardBody } from "./styled";

export type CardHolderProps = {
  onClick?: VoidFunction;
  imageUrl?: String;
};

export const CardHolder: React.FC<CardHolderProps> = ({
  children,
  imageUrl,
  onClick,
}) => {
  return (
    <CardBody imageUrl={imageUrl} onClick={onClick}>
      {children}
    </CardBody>
  );
};
