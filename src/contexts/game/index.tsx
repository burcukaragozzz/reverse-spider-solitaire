import { useEffect, useReducer } from "react";
import { shuffle } from 'lodash';

import { GameContext } from "./context";
import { GameReducer } from "./reducer";
import { generateCards, generateDecks } from './helper'

import { SET_DECKS } from "./types";

export const GameProvider = (props) => {

    const [state, dispatch] = useReducer(GameReducer, {
        decks: [],
    });

    const initializeState = () => {
        const cards = generateCards();

        const shuffledCards = shuffle(cards);

        const decks = generateDecks(shuffledCards);

        dispatch({ 
            type: SET_DECKS,
            payload: decks
        });
    }

    useEffect(() => {
        initializeState()
    }, []);

    return (
        <GameContext.Provider value={state}>
            {props.children}
        </GameContext.Provider>
    );
};
