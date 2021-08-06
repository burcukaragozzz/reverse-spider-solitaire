import { useEffect, useReducer } from "react";
import { shuffle, chunk } from 'lodash';

import { GameContext } from "./context";
import { GameReducer } from "./reducer";

import { SET_DECKS } from "./types";

export const GameProvider = (props) => {

    const [state, dispatch] = useReducer(GameReducer, {
        decks: [],
    });

    const generateCards = () => {
        try {
            const ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

            const cards = [];

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < ranks.length; j++) {
                    cards.push({
                        rank: ranks[j],
                        suit: "diamonds",
                        isDown: true,
                        deck: i,
                        isSelected: false,
                        isHighlighted: false,
                    });
                }
            }

            const shuffledCards = shuffle(cards);

            const decks = setDecks(shuffledCards);

            dispatch({
                type: SET_DECKS,
                payload: decks
            })

        } catch (err) {
            console.log(err.message);
        }
    };

    const setDecks = (cards) => {
        try {
            const decks = chunk(cards.slice(0, 50), 5);

            cards.slice(50, 54).forEach((item, index) => decks[index].push(item));

            decks[10] = cards.slice(54); //50 dağıtılacak olan

            decks.forEach((deck, index) => {
                if (index !== 10) deck[deck.length - 1].isDown = false;
            });

            return decks;

        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        generateCards();
    }, []);

    return (
        <GameContext.Provider value={state}>
            {props.children}
        </GameContext.Provider>
    );
};
