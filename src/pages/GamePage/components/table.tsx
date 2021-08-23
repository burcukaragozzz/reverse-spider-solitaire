import React from 'react';

import { useGame } from 'hooks';
import { Card, CardHolder } from 'components';
import { IColumn, ICard } from 'interfaces';

import { Column } from './column';

import { CardsContainer } from '../styled';

export const Table: React.FC = () => {
    const { columns, source, setTargetSafely, setSourceSafely } = useGame();

    const handleCardClick = (selectedColumn: IColumn, selectedCard?: ICard) => {
        if (source) {
            setTargetSafely(selectedColumn);
        } else {
            setSourceSafely(selectedColumn, selectedCard);
        }
    };

    const checkIfIsSelected = (card: ICard) => {
        return !!source?.cards.find((movingCard) => movingCard.id === card.id);
    };

    return (
        <CardsContainer>
            {columns.map((column, index) => (
                <Column column={column} key={index}>
                    {column.cards.length === 0 ? (
                        <CardHolder onClick={() => handleCardClick(column)} />
                    ) : (
                        column.cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                column={column}
                                isSelected={checkIfIsSelected(card)}
                                onClick={() => handleCardClick(column, card)}
                            />
                        ))
                    )}
                </Column>
            ))}
        </CardsContainer>
    );
};
