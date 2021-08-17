import React from 'react';
import { useDrop } from 'react-dnd';

import { useGame } from 'hooks';
import { DragItem, ICard, IColumn, ISource, ITarget } from 'interfaces';
import { Card, CardHolder, TopContainer, ControlPanel, CustomDragLayer, Wrapper } from 'components';

import { PageContainer, DeckContainer, CardsContainer } from './styled';
import { useTheme } from 'definitions/styled-components';

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
    const { columns, source, setTargetSafely, setSourceSafely } = useGame();

    const handleCardClick = (selectedColumn: IColumn, selectedCard: ICard) => {
        if (source) {
            setTargetSafely(selectedColumn);
        } else {
            setSourceSafely(selectedColumn, selectedCard);
        }
    };

    const { themeName } = useTheme();

    return (
        <PageContainer themeName={themeName}>
            <TopContainer />
            <CustomDragLayer />
            <CardsContainer>
                {columns.map((column, index) => (
                    <>
                        {column.cards.length === 0 ? (
                            <CardHolder />
                        ) : (
                            <Column column={column} key={index + '2'}>
                                {column.cards.map((card) => (
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
                                        isHighlighted={card.isHighlighted}
                                    />
                                ))}
                            </Column>
                        )}
                    </>
                ))}
            </CardsContainer>
            <ControlPanel />
        </PageContainer>
    );
};
