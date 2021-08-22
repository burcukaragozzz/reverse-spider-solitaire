import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDrop } from 'react-dnd';

import { useGame } from 'hooks';
import { DragItem, ICard, IColumn, ISource, ITarget } from 'interfaces';
import { Card, CardHolder, ControlPanel, CustomDragLayer, Fireworks, Modal } from 'components';

import {
    PageContainer,
    DeckContainer,
    CardsContainer,
    Container,
    RemCardsContainer,
    CompletedDeckCards,
} from './styled';
import { GameActions } from 'contexts/game/types';

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

const TopContainer: React.FC = () => {
    const { startNextTurn, remainingCards, completedSequences, suit } = useGame();

    return (
        <Container>
            <RemCardsContainer data-testid="remaining-cards">
                {remainingCards.map((_, index) => (
                    <CardHolder
                        key={`r-${index}`}
                        onClick={startNextTurn}
                        imageUrl="/images/card_back.png"
                        style={{
                            marginLeft: '-50px',
                        }}
                    />
                ))}
            </RemCardsContainer>

            <CompletedDeckCards data-testid="completed-deck-cards">
                {completedSequences
                    .sort((a, b) => a - b)
                    .map((completed, index) =>
                        completed ? (
                            <CardHolder
                                key={`c-${index}`}
                                imageUrl={`/images/${suit}/${suit}_1.png`}
                            />
                        ) : (
                            <CardHolder key={`c-${index}`} />
                        ),
                    )}
            </CompletedDeckCards>
        </Container>
    );
};

export const GamePage: React.FC = () => {
    const {
        columns,
        source,
        setTargetSafely,
        setSourceSafely,
        error,
        completedSequences,
        dispatch,
        score,
    } = useGame();

    const history = useHistory();

    const handleCardClick = (selectedColumn: IColumn, selectedCard?: ICard) => {
        if (source) {
            setTargetSafely(selectedColumn);
        } else {
            setSourceSafely(selectedColumn, selectedCard);
        }
    };

    const gameOver = completedSequences.filter((sequence) => sequence === 1).length === 8;

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
            {error && (
                <Modal
                    title="Warning"
                    onConfirm={() => {
                        dispatch({ type: GameActions.SET_ERROR, payload: '' });
                    }}
                >
                    {error}
                </Modal>
            )}
            {gameOver && (
                <>
                    <Fireworks />
                    <Modal
                        title="CONGRATULATIONS!"
                        confirmLabel="Start a New Game"
                        onConfirm={() => history.push('/')}
                    >
                        You completed the game with {score} scores.
                    </Modal>
                </>
            )}
        </PageContainer>
    );
};
