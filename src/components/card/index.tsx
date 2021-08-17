import React from 'react';
import { useDrag } from 'react-dnd';

import { useGame } from 'hooks';
import { ICard, IColumn, DragItem, ISource } from 'interfaces';

import { Container, CardBody, CardImage, CardOverlay } from './styled';

export type Props = {
    id: string;
    column?: IColumn;
    card: ICard;
    isDown: boolean;
    isSelected: boolean;
    isHighlighted?: boolean;
    onClick?: VoidFunction;
};

export const Card: React.FC<Props> = ({
    id,
    column,
    card,
    isDown,
    isSelected,
    isHighlighted,
    onClick,
}) => {
    const { rank } = card;

    const { getMovingCards, suit } = useGame();

    const imageUrl = isDown ? '/images/card_back.png' : `/images/${suit}/${suit}_${rank}.png`;

    const [_, drag] = useDrag({
        type: DragItem.Card,
        item: () => {
            const cards = getMovingCards(column, card);

            const source: ISource = { column, cards };

            return source;
        },
    });

    return (
        <Container ref={drag}>
            <CardOverlay />

            <CardBody id={id} isSelected={isSelected} isHighlighted onClick={onClick}>
                <CardImage isDown={isDown} src={imageUrl} alt="card" />
            </CardBody>
        </Container>
    );
};
