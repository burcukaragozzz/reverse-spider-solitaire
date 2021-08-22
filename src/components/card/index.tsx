import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { useGame } from 'hooks';
import { ICard, IColumn, DragItem, ISource } from 'interfaces';

import { Container, CardBody, CardImage } from './styled';

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

    const [_, drag, preview] = useDrag({
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
    });

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    });

    return (
        <Container>
            <div>
                <CardBody
                    id={id}
                    isSelected={isSelected}
                    onClick={onClick}
                    ref={drag}
                    className="card"
                >
                    <CardImage
                        isDown={isDown}
                        src={imageUrl}
                        draggable={false}
                        alt="card"
                        data-testid="card-image"
                    />
                </CardBody>
            </div>
        </Container>
    );
};
