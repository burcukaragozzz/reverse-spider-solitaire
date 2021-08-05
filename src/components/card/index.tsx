import React, { useState } from "react";

import { CardBody, CardValue, DiamondLogo } from "./styled";

export interface ICard {
  card: {
    rank: string,
    isSelected: boolean, 
    isDown: boolean,
    isHighlighted: boolean
    decks: string,
    suit: string
  },
}

export const Card: React.FC<ICard> = ({
  card,
}) => {

  return (
    <CardBody isDown isSelected isHighlighted>
      <CardValue isContentVisible>{card.rank}</CardValue>
      <DiamondLogo isContentVisible src="/images/diamond.png" alt="diamond-logo" />
      <CardValue isContentVisible right>{card.rank}</CardValue>
    </CardBody>
  );
};
