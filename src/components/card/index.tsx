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
    onClick?: VoidFunction;
};

export const Card: React.FC<Props> = ({ id, column, card, isDown, isSelected, onClick }) => {
    const { rank } = card;

    const { getMovingCards, suit } = useGame();

    const imageUrl = isDown ? '/images/card_back.png' : `/images/${suit}/${suit}_${rank}.png`;

    const [{ isDragging }, drag] = useDrag({
        type: DragItem.Card,
        item: () => {
            const cards = getMovingCards(column, card);

            const source: ISource = { column, cards };

            return source;
        },
        canDrag: () => {
            const cards = getMovingCards(column, card);

            return cards.length > 0;
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <Container>
            <CardOverlay />
            <div>
                <CardBody
                    id={id}
                    isSelected={isSelected}
                    onClick={onClick}
                    ref={drag}
                    className="card"
                >
                    <CardImage isDown={isDown} src={imageUrl} alt="card" data-testid="card-image" />
                </CardBody>
            </div>
        </Container>
    );
};
