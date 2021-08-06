import React, { useState } from "react";

import { CardBody, CardValue, DiamondLogo } from "./styled";

export interface ICard {
  card: {
    rank: string,
    isSelected: boolean, 
    isDown: boolean,
    isHighlighted: boolean
    deck: string,
    suit: string
  },
  isDown: boolean
  isSelected: boolean, 
  isHighlighted: boolean
}

export const Card: React.FC<ICard> = ({
  card,
  isDown
}) => {

  const isContentVisible = isDown ? false : true;

  return (
    <CardBody isDown={isDown} isSelected isHighlighted>
      <CardValue isContentVisible={isContentVisible}>{card.rank}</CardValue>
      <DiamondLogo isContentVisible={isContentVisible} src="/images/diamond.png" alt="diamond-logo" />
      <CardValue isContentVisible={isContentVisible} right>{card.rank}</CardValue>
    </CardBody>
  );
};
