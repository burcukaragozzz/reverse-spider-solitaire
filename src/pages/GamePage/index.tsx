import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import { useGame } from 'hooks';
import { DragItem, ICard, IColumn, ISource, ITarget } from 'interfaces';
import { Card, CardHolder, TopContainer, ControlPanel, CustomDragLayer, Modal } from 'components';

import { PageContainer, DeckContainer, CardsContainer } from './styled';

type ColumnProps = {
    column: IColumn;
};

const Column: React.FC<ColumnProps> = ({ children, column }) => {
    const { move } = useGame();

    const [_, drop] = useDrop({
        accept: DragItem.Card,
        drop: (source: ISource) => {
            const target: ITarget = { column };

            move(source, target);
        },
    });

    return <DeckContainer ref={drop}>{children}</DeckContainer>;
};

export const GamePage: React.FC = () => {
    const { columns, source, setTargetSafely, setSourceSafely, error } = useGame();
    const [isCloseModal, setIsCloseModal] = useState(true);

    const handleCardClick = (selectedColumn: IColumn, selectedCard?: ICard) => {
        if (source) {
            setTargetSafely(selectedColumn);
        } else {
            setSourceSafely(selectedColumn, selectedCard);
        }
    };

    return (
        <PageContainer>
            <TopContainer />
            <CustomDragLayer />
            <CardsContainer>
                {columns.map((column, index) => (
                    <Column column={column} key={index + '2'}>
                        {column.cards.length === 0 ? (
                            <CardHolder onClick={() => handleCardClick(column)} />
                        ) : (
                            column.cards.map((card) => (
                                <Card
                                    id={card.id}
                                    key={card.id}
                                    onClick={() => handleCardClick(column, card)}
                                    column={column}
                                    card={card}
                                    isSelected={
                                        !!source?.cards.find(
                                            (movingCard) => movingCard.id === card.id,
                                        )
                                    }
                                    isDown={card.isDown}
                                />
                            ))
                        )}
                    </Column>
                ))}
            </CardsContainer>
            <ControlPanel />
            {error && isCloseModal && (
                <Modal title="Warning" onConfirm={() => setIsCloseModal(false)}>
                    {error}
                </Modal>
            )}
        </PageContainer>
    );
};
