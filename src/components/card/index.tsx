import React from "react";

import { ICard } from "interfaces";

import { CardBody, CardValue, DiamondLogo } from "./styled";

export type Props = {
  card: ICard
  isDown: boolean
  isSelected: boolean, 
  isHighlighted: boolean,
  onClick?: VoidFunction
}

export const Card: React.FC<Props> = ({
  card,
  isDown,
  isSelected,
  isHighlighted,
  onClick
}) => {

  const isContentVisible = isDown ? false : true;

  return (
    <CardBody isDown={isDown} isSelected={isSelected} isHighlighted onClick={onClick}>
      <CardValue isContentVisible={isContentVisible}>{card.rank.displayValue}</CardValue>
      <DiamondLogo isContentVisible={isContentVisible} src="/images/diamond.png" alt="diamond-logo" />
      <CardValue isContentVisible={isContentVisible} right>{card.rank.displayValue}</CardValue>
    </CardBody>
  );
};
