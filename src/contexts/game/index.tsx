import { useEffect, useReducer } from "react";
import { shuffle } from 'lodash';
import { ICard, IColumn, ISource } from 'interfaces';

import { GameContext } from "./context";
import { GameReducer } from "./reducer";
import {
    removeCardFromColumn,
    addCardToColumn,
    generateCards,
    flipLastCard,
    dealCards,
 } from './helpers'
import { GameActions } from "./types";

export const GameProvider = (props) => {
    const [state, dispatch] = useReducer(GameReducer, {
        columns: [],
        source: null,
    });

    const { source, columns } = state;

    const initializeState = () => {
        const cards = generateCards();

        const shuffledCards = shuffle(cards);

        const { columns, remaining } = dealCards(shuffledCards);

        dispatch({
            type: GameActions.SET_COLUMNS,
            payload: columns
        });
    }

    const setSource = (source: ISource | null) => {
        dispatch({ type: GameActions.SET_SOURCE, payload: source })
    }


    // * premimum: move(item, source, destination)
    const moveCard = (selectedCard: ICard, selectedColumn: IColumn) => {
        if (source) {
            const canMove = selectedCard.rank.value - source.card.rank.value === 1;

            if (canMove) {
                const columnsCopy = [...columns];

                const updatedSourceColumn = removeCardFromColumn(source, columnsCopy)

                flipLastCard(updatedSourceColumn, columnsCopy)

                addCardToColumn(source.card, selectedColumn, columnsCopy)

                dispatch({ type: GameActions.SET_COLUMNS, payload: columnsCopy })
            }

            setSource(null);
        } else {
            setSource({ card: selectedCard, column: selectedColumn })
        }
    }

    useEffect(() => {
        initializeState()
    }, []);

    const contextValue = {
        ...state,
        setSource,
        moveCard,
        dispatch
    }

    return (
        <GameContext.Provider value={contextValue}>
            {props.children}
        </GameContext.Provider>
    );
};
