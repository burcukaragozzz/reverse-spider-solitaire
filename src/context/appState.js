import { useReducer } from "react";
import { shuffle, chunk } from 'lodash';

import { AppContext } from "./appContext";
import { AppReducer } from "./appReducer";

import {
  GET_CARDS,
  GET_DECKS
} from "./types";

export const AppState = (props) => {
  const initialState = {
    cards: [],
    decks: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get Card
  const getCards = () => {
    try {
      const ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

      const cards = new Array();

      for (var i = 0; i < 8; i++) {
        for (var j = 0; j < ranks.length; j++) {
          var card = {
            rank: ranks[j],
            suit: "diamonds",
            isDown: true,
            deck: i,
            isSelected: false,
            isHighlighted: false,
          };
          cards.push(card);
        }
      }

      const shuffledDeck = shuffle(cards);

      dispatch({
        type: GET_CARDS,
        payload: shuffledDeck,
      });

    } catch (err) {
      console.log(err.message);
    }
  };

  // Get Decks
  const getDecks = () => {
    try {
      const { cards } = state;
      const decks = chunk(cards.slice(0, 50), 5);

      decks[10] = cards.slice(50);

      decks.forEach((deck, index) => {
        if (index !== 10) deck[deck.length - 1].isDown = false;
      });

      dispatch({
        type: GET_DECKS,
        payload: decks,
      });

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <AppContext.Provider
      value={{
        cards: state.cards,
        decks: state.decks,
        getCards,
        getDecks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};