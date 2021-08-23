import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { useGame } from 'hooks';
import { ICard, IColumn, DragItem, ISource } from 'interfaces';

import { Container, CardBody, CardImage } from './styled';

export type Props = {
    column?: IColumn;
    card: ICard;
    isSelected?: boolean;
    onClick?: VoidFunction;
};

export const Card: React.FC<Props> = ({ column, card, isSelected, onClick }) => {
    const { getMovingCards, suit } = useGame();

    const [isImageVisible, setIsImageVisible] = useState(false);

    const { rank } = card;

    const imageUrl = card.isDown ? '/images/card_back.png' : `/images/${suit}/${suit}_${rank}.png`;

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
                    id={card.id}
                    isSelected={isSelected}
                    onClick={onClick}
                    ref={drag}
                    className="card"
                >
                    <CardImage
                        isDown={card.isDown}
                        src={imageUrl}
                        draggable={false}
                        onLoad={() => setIsImageVisible(true)}
                        alt="card"
                        data-testid="card-image"
                        isVisible={isImageVisible}
                    />
                </CardBody>
            </div>
        </Container>
    );
};
