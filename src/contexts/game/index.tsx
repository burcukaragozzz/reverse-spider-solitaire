import { useEffect, useReducer } from 'react';
import { shuffle } from 'lodash';

import { ICard, IColumn, ISource, ITarget } from 'interfaces';

import { GameContext } from './context';
import { GameReducer } from './reducer';
import { GameActions } from './types';

import {
    removeCardsFromColumn,
    addCardsToColumn,
    generateCards,
    flipLastCard,
    dealCards,
    dealRemainingCards,
    checkIsSequence,
    checkIsLessOneRank,
} from './helpers';

import flickAudio from 'assets/sounds/card-flick.mp3';
import dealAudio from 'assets/sounds/deal-cards.mp3';
import sequenceAudio from 'assets/sounds/sequence.mp3';

const cards = generateCards();

export const GameProvider = (props) => {
    const [state, dispatch] = useReducer(GameReducer, {
        columns: [],
        source: null,
        target: null,
        remainingCards: [],
        completedSequences: Array(8).fill(0),
        suit: 'diamond',
        score: 0,
    });

    const { source, columns, remainingCards, target, completedSequences } = state;

    const startGame = () => {
        const shuffledCards = shuffle(cards);

        const { columns, remainingCards } = dealCards(shuffledCards);

        dispatch({
            type: GameActions.START_GAME,
            payload: { columns, remainingCards },
        });
    };

    const setError = (error: string) => {
        dispatch({ type: GameActions.SET_ERROR, payload: error });
    };

    const setSource = (source: ISource | null) => {
        dispatch({
            type: GameActions.SET_SOURCE,
            payload: source,
        });
    };

    const setTarget = (target: ITarget | null) => {
        dispatch({
            type: GameActions.SET_TARGET,
            payload: target,
        });
    };

    const setTargetSafely = (targetColumn: IColumn) => {
        const isSameColumn = source.column.id === targetColumn.id;

        if (isSameColumn) return setSource(null);

        setTarget({ column: targetColumn });
    };

    const setSourceSafely = (sourceColumn: IColumn, sourceCard: ICard) => {
        const cards = getRestOfTheCards(sourceColumn, sourceCard);

        const isSequence = checkIsSequence(cards);

        if (isSequence) {
            setSource({ cards, column: sourceColumn });
        } else {
            setError('Not a sequence!');
        }
    };

    const getRestOfTheCards = (sourceColumn: IColumn, selectedCard: ICard) => {
        const selectedCardIndex = sourceColumn.cards.findIndex(({ id }) => id === selectedCard.id);

        const movingCards = sourceColumn.cards.slice(selectedCardIndex);

        return movingCards;
    };

    const getMovingCards = (column: IColumn, card: ICard) => {
        const cards = getRestOfTheCards(column, card);

        const isSequence = checkIsSequence(cards);

        return isSequence ? cards : [];
    };

    const checkCanMove = (source: ISource, target: ITarget) => {
        const [targetCard] = target.column.cards.slice(-1);

        if (!targetCard) return true;

        const isContinous = checkIsLessOneRank(targetCard, source.cards[0]);

        return isContinous;
    };

    const setUpdatedColumns = (source: ISource, target: ITarget) => {
        const columnsCopy = [...columns];

        const updatedSourceColumn = removeCardsFromColumn(source.column, source.cards, columnsCopy);

        flipLastCard(updatedSourceColumn.id, columnsCopy);

        const updatedTargetColumn = addCardsToColumn(target.column, source.cards, columnsCopy);

        dispatch({ type: GameActions.SET_COLUMNS, payload: columnsCopy });

        return { updatedTargetColumn, columnsCopy };
    };

    const startNextTurn = () => {
        const hasEmptyColumn = columns.find((column) => column.cards.length === 0);

        if (hasEmptyColumn)
            return setError(
                'There must be at least one card in each tableau column  before you can deal a new row of cards.',
            );

        new Audio(dealAudio).play();

        dispatch({
            type: GameActions.SET_COLUMNS_AND_REMAINING_CARDS,
            payload: dealRemainingCards(columns, remainingCards),
        });
    };

    const discardSequenceSafely = (updatedTargetColumn: IColumn, columnsCopy: IColumn[]) => {
        const facedUpCards = updatedTargetColumn.cards.filter((card) => card.isDown === false);

        const has13Cards = facedUpCards.length >= 13;

        if (has13Cards) {
            const isSequence = checkIsSequence(facedUpCards);

            if (isSequence) {
                setTimeout(() => {
                    const cleanedUpColumn = removeCardsFromColumn(
                        updatedTargetColumn,
                        facedUpCards,
                        columnsCopy,
                    );

                    flipLastCard(cleanedUpColumn.id, columnsCopy);

                    const currentEmpty = completedSequences.indexOf(0);

                    const updatedCompletions = completedSequences.map((completion, index) =>
                        index === currentEmpty ? 1 : completion,
                    );

                    const score = updatedCompletions.filter(Boolean).length * 65;

                    dispatch({
                        type: GameActions.COMPLETE_SEQUENCE,
                        payload: {
                            columns: columnsCopy,
                            completedSequences: updatedCompletions,
                            score,
                        },
                    });
                }, 600);

                new Audio(sequenceAudio).play();
            }
        }
    };

    const move = (source: ISource, target: ITarget) => {
        const isSameColumn = source.column.id === target.column.id;

        if (isSameColumn) return;

        const canMove = checkCanMove(source, target);

        new Audio(flickAudio).play();

        if (canMove) {
            const { updatedTargetColumn, columnsCopy } = setUpdatedColumns(source, target);

            discardSequenceSafely(updatedTargetColumn, columnsCopy);
        } else {
            setError('You cannot move!');
        }
    };

    const moveSelection = () => {
        if (target) {
            move(source, target);
            setTarget(null);
            setSource(null);
        }
    };

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        moveSelection();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    const contextValue = {
        ...state,
        restartGame: startGame,
        startNextTurn,
        setTargetSafely,
        setSourceSafely,
        getMovingCards,
        move,
        dispatch,
    };

    return <GameContext.Provider value={contextValue}>{props.children}</GameContext.Provider>;
};
