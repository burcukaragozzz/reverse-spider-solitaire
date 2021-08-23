import React from 'react';
import { useHistory } from 'react-router-dom';

import { useGame } from 'hooks';
import { GameActions } from 'contexts/game/types';
import { Card, CardHolder, ControlPanel, CustomDragLayer, Fireworks, Modal } from 'components';
import { ICard, IColumn } from 'interfaces';

import { TopContainer } from './topContainer';
import { Column } from './column';

import gameoverAudio from 'assets/sounds/gameover.mp3';

import { PageContainer, CardsContainer } from './styled';

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
        restartGame,
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
                    <Column column={column} key={index}>
                        {column.cards.length === 0 ? (
                            <CardHolder onClick={() => handleCardClick(column)} />
                        ) : (
                            column.cards.map((card) => (
                                <Card
                                    key={card.id}
                                    onClick={() => handleCardClick(column, card)}
                                    column={column}
                                    card={card}
                                    isSelected={
                                        !!source?.cards.find(
                                            (movingCard) => movingCard.id === card.id,
                                        )
                                    }
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
                    {new Audio(gameoverAudio).play()}
                    <Fireworks />
                    <Modal
                        title="CONGRATULATIONS!"
                        confirmLabel="Start a New Game"
                        onConfirm={() => {
                            history.push('/');
                            // restartGame();
                        }}
                    >
                        You completed the game with {score} scores.
                    </Modal>
                </>
            )}
        </PageContainer>
    );
};
