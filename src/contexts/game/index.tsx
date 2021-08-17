import { useEffect, useReducer } from 'react';
import { shuffle } from 'lodash';
import { ICard, IColumn, ISource, ITarget } from 'interfaces';

import { GameContext } from './context';
import { GameReducer } from './reducer';
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
import { GameActions } from './types';

export const GameProvider = (props) => {
    const [state, dispatch] = useReducer(GameReducer, {
        columns: [],
        source: null,
        target: null,
        remainingCards: [],
        completedSequences: Array(8).fill(false),
        suit: 'diamond',
    });

    const { source, columns, remainingCards, target, completedSequences } = state;

    const initializeState = () => {
        const cards = generateCards();

        const shuffledCards = shuffle(cards);

        const { columns, remainingCards } = dealCards(shuffledCards);

        dispatch({
            type: GameActions.SET_COLUMNS_AND_REMAINING_CARDS,
            payload: { columns, remainingCards },
        });
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
            alert('Not a sequence!');
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
        dispatch({
            type: GameActions.SET_COLUMNS_AND_REMAINING_CARDS,
            payload: dealRemainingCards(columns, remainingCards),
        });
    };

    const discardSequenceSafely = (updatedTargetColumn: IColumn, columnsCopy: IColumn[]) => {
        const facedUpCards = updatedTargetColumn.cards.filter((card) => card.isDown === false);

        const has13Cards = facedUpCards.length === 13;

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

                    const currentEmpt = completedSequences.indexOf(false);

                    dispatch({
                        type: GameActions.COMPLETE_SEQUENCE,
                        payload: {
                            columns: columnsCopy,
                            completedSequences: completedSequences.map((_, index) =>
                                index === currentEmpt ? true : false,
                            ),
                        },
                    });
                }, 600);
            }
        }
    };

    const move = (source: ISource, target: ITarget) => {
        const canMove = checkCanMove(source, target);

        if (canMove) {
            const { updatedTargetColumn, columnsCopy } = setUpdatedColumns(source, target);

            discardSequenceSafely(updatedTargetColumn, columnsCopy);
        } else {
            alert('You cannot move!');
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
        initializeState();
    }, []);

    useEffect(() => {
        moveSelection();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    const contextValue = {
        ...state,
        startNextTurn,
        setTargetSafely,
        setSourceSafely,
        getMovingCards,
        move,
        dispatch,
    };

    return <GameContext.Provider value={contextValue}>{props.children}</GameContext.Provider>;
};
