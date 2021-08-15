import React from 'react';

import { useGame } from 'hooks';
import { ICard } from 'interfaces';
import { CardBody, CardImage } from './styled';

export type Props = {
    card: ICard;
    isDown: boolean;
    isSelected: boolean;
    isHighlighted: boolean;
    onClick?: VoidFunction;
};

export const Card: React.FC<Props> = ({ card, isDown, isSelected, isHighlighted, onClick }) => {
    const { suit } = useGame();

    const { rank } = card;

    const imageUrl = isDown ? '/images/card_back.png' : `/images/${suit}/${suit}_${rank.value}.png`;

    return (
        <CardBody isSelected={isSelected} isHighlighted onClick={onClick}>
            <CardImage isDown={isDown} src={imageUrl} alt="suit-card" />
        </CardBody>
    );
};
